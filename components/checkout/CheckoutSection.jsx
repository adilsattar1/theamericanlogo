"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import PayPalButton from "../payments/PayPalButton";
import { API_ENDPOINTS, postJson } from "../../lib/api";
import { STRIPE_PUBLISHABLE_KEY } from "../../lib/config";

export default function CheckoutSection() {
  const [stripe, setStripe] = useState(null);
  const [elements, setElements] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [paymentError, setPaymentError] = useState("");
  const [packageName, setPackageName] = useState("");
  const [price, setPrice] = useState("");
  const [customer, setCustomer] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    notes: "",
  });
  const paymentElementRef = useRef(null);

  const numericPrice = Number(price);
  const hasPackage = Boolean(packageName && price && !Number.isNaN(numericPrice));
  const infoComplete = Boolean(customer.fullName.trim() && customer.email.trim() && customer.phone.trim());

  const handleCustomerChange = (event) => {
    const { name, value } = event.target;
    setCustomer((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const storedPackage = sessionStorage.getItem("checkoutPackage");
    if (storedPackage) {
      try {
        const parsed = JSON.parse(storedPackage);
        setPackageName(parsed.packageName || "");
        setPrice(parsed.price || "");
      } catch {
        sessionStorage.removeItem("checkoutPackage");
      }
    }
  }, []);

  useEffect(() => {
    if (!STRIPE_PUBLISHABLE_KEY) {
      return;
    }

    loadStripe(STRIPE_PUBLISHABLE_KEY).then((stripeObject) => {
      setStripe(stripeObject);
    });
  }, []);

  useEffect(() => {
    if (!hasPackage || !stripe || !STRIPE_PUBLISHABLE_KEY) {
      return;
    }

    setIsFetching(true);
    setError("");
    setPaymentError("");
    setClientSecret("");
    setElements(null);

    postJson(API_ENDPOINTS.stripePaymentIntent, {
      packageName,
      price: numericPrice,
      customer,
    })
      .then((result) => {
        const secret = result.clientSecret || "";
        if (!secret) {
          throw new Error("Stripe client secret missing from backend response.");
        }
        setClientSecret(secret);
      })
      .catch((err) => {
        setError(err.message || "Unable to initialize Stripe payment form.");
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [packageName, numericPrice, hasPackage, stripe]);

  useEffect(() => {
    if (!stripe || !clientSecret || !paymentElementRef.current) {
      return;
    }

    const appearance = {
      theme: "stripe",
      variables: {
        colorPrimary: "#1e2a78",
        colorBackground: "#ffffff",
        colorText: "#111827",
        colorDanger: "#b91c1c",
      },
    };

    const stripeElements = stripe.elements({ clientSecret, appearance });
    const paymentElement = stripeElements.create("payment");
    paymentElement.mount(paymentElementRef.current);
    setElements(stripeElements);

    return () => {
      paymentElement.unmount();
    };
  }, [stripe, clientSecret]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    if (!infoComplete) {
      setPaymentError("Please complete your contact information before continuing.");
      return;
    }

    setIsSubmitting(true);
    setPaymentError("");

    const { error: stripeError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/thankyou`,
      },
      redirect: "if_required",
    });

    if (stripeError) {
      setPaymentError(stripeError.message || "Payment confirmation failed.");
      setIsSubmitting(false);
    }
  };

  return (
    <section className="packagewrp checkout-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="checkout-card">
              <div className="checkout-header">
                <h2>Secure Checkout</h2>
                <p>Complete your purchase with Stripe or PayPal.</p>
              </div>

              {hasPackage ? (
                <div className="checkout-details">
                  <div className="detail-row">
                    <span>Package</span>
                    <strong>{packageName}</strong>
                  </div>
                  <div className="detail-row">
                    <span>Price</span>
                    <strong>${numericPrice.toFixed(2)}</strong>
                  </div>
                </div>
              ) : (
                <div className="checkout-empty">
                  <p>Please select a package first on the packages page.</p>
                  <a className="grad-btn" href="/packages">Choose a package</a>
                </div>
              )}

              {hasPackage && (
                <div className="checkout-grid">
                  <div className="checkout-form-fields">
                    <div className="info-card">
                      <h3>Your details</h3>
                      <p>We only ask for the essential information to process your order securely.</p>

                      <div className="form-row">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          value={customer.fullName}
                          onChange={handleCustomerChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>

                      <div className="form-row two-column">
                        <div>
                          <label htmlFor="email">Email</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            value={customer.email}
                            onChange={handleCustomerChange}
                            placeholder="you@example.com"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone">Phone</label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={customer.phone}
                            onChange={handleCustomerChange}
                            placeholder="(123) 456-7890"
                            required
                          />
                        </div>
                      </div>

                      <div className="form-row two-column">
                        <div>
                          <label htmlFor="company">Company</label>
                          <input
                            id="company"
                            name="company"
                            type="text"
                            value={customer.company}
                            onChange={handleCustomerChange}
                            placeholder="Company name"
                          />
                        </div>
                        <div>
                          <label htmlFor="address">Address</label>
                          <input
                            id="address"
                            name="address"
                            type="text"
                            value={customer.address}
                            onChange={handleCustomerChange}
                            placeholder="Street address"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <label htmlFor="notes">Order notes</label>
                        <textarea
                          id="notes"
                          name="notes"
                          value={customer.notes}
                          onChange={handleCustomerChange}
                          placeholder="Optional details about your order"
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="checkout-summary">
                    <div className="summary-card">
                      <h3>Order summary</h3>
                      <div className="summary-row">
                        <span>Package</span>
                        <strong>{packageName}</strong>
                      </div>
                      <div className="summary-row">
                        <span>Estimated total</span>
                        <strong>${numericPrice.toFixed(2)}</strong>
                      </div>
                      <div className="summary-note">
                        Secure payments powered by Stripe and PayPal. Your information is protected and encrypted.
                      </div>

                      <div className="checkout-stripe">
                        {!STRIPE_PUBLISHABLE_KEY ? (
                          <div className="text-danger">
                            Stripe publishable key is not configured. Please set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.
                          </div>
                        ) : isFetching ? (
                          <div>Loading Stripe payment form...</div>
                        ) : clientSecret ? (
                          <form className="checkout-form" onSubmit={handleSubmit}>
                            <div className="payment-element" ref={paymentElementRef} />
                            <button
                              className="grad-btn"
                              type="submit"
                              disabled={!stripe || !elements || isSubmitting || !infoComplete}
                            >
                              {isSubmitting ? "Processing payment..." : "Pay with Stripe"}
                            </button>
                            {paymentError ? <p className="text-danger mt-3">{paymentError}</p> : null}
                            {!infoComplete ? (
                              <p className="text-danger mt-3">Complete your contact details before payment.</p>
                            ) : null}
                          </form>
                        ) : (
                          <div className="text-danger">Unable to load Stripe payment form.</div>
                        )}
                      </div>

                      <div className="paypal-checkout">
                        <p className="checkout-subtitle">Or pay with PayPal</p>
                        <PayPalButton packageName={packageName} price={numericPrice} />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {error ? <p className="text-danger mt-3">{error}</p> : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
