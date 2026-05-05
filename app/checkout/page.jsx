"use client";

import React, { useEffect, useRef, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CreditCard, Lock, ShieldCheck, ChevronRight, Zap } from 'lucide-react';
import { API_ENDPOINTS } from '../../lib/api';

const customStyles = `
  /* Base & Reset */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  ::selection {
    background-color: rgba(255, 255, 255, 0.2);
  }

  .app-container {
    min-height: 100vh;
    background-color: #09090b;
    color: rgba(255, 255, 255, 0.8);
    position: relative;
    overflow: hidden;
  }

  /* Ambient Glows */
  .glow-top {
    position: absolute;
    top: -20%;
    left: -10%;
    width: 50vw;
    height: 50vw;
    background-color: rgba(99, 102, 241, 0.1);
    filter: blur(120px);
    border-radius: 50%;
    pointer-events: none;
  }

  .glow-bottom {
    position: absolute;
    bottom: -20%;
    right: -10%;
    width: 40vw;
    height: 40vw;
    background-color: rgba(59, 130, 246, 0.1);
    filter: blur(120px);
    border-radius: 50%;
    pointer-events: none;
  }

  .glow-inner {
    position: absolute;
    top: -6rem;
    right: -6rem;
    width: 16rem;
    height: 16rem;
    background-color: rgba(99, 102, 241, 0.1);
    filter: blur(80px);
    border-radius: 50%;
    pointer-events: none;
  }

  /* Header Section */
  .header-section {
    position: relative;
    margin-top: 6rem;
    padding: 5rem 1.5rem 3rem;
  }

  .header-content {
    max-width: 56rem;
    margin: 0 auto;
    text-align: center;
  }

  .header-subtitle {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 1rem;
    display: block;
  }

  .header-title {
    font-size: 1.875rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: -0.025em;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .header-title span {
    color: #ffffff;
  }

  .header-desc {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 300;
    max-width: 42rem;
    margin: 0 auto;
    line-height: 1.625;
    font-size: 0.875rem;
  }

  /* Checkout Layout */
  .checkout-section {
    position: relative;
    padding: 0 1.5rem 6rem;
    z-index: 10;
  }

  .checkout-container {
    max-width: 72rem;
    margin: 0 auto;
  }

  .checkout-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  /* Glass Panels */
  .glass-panel {
    background-color: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(40px);
    -webkit-backdrop-filter: blur(40px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    position: relative;
    overflow: hidden;
  }

  .panel-title {
    font-size: 1.125rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    z-index: 10;
  }

  .glass-panel h2,
  .glass-panel h3,
  .glass-panel h4,
  .glass-panel .panel-title,
  .glass-panel .summary-title {
    font-weight: 300;
  }

  .icon-indigo { color: #818cf8; }
  .icon-blue { color: #60a5fa; }

  /* Order Summary */
  .summary-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    margin-bottom: 1rem;
  }

  .summary-row-center {
    align-items: center;
  }

  .summary-title {
    color: rgba(255, 255, 255, 0.8);
    font-weight: 400;
    font-size: 1rem;
  }

  .summary-desc {
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 0.25rem;
    font-weight: 300;
  }

  .summary-price {
    color: rgba(255, 255, 255, 0.9);
    font-weight: 300;
  }

  .summary-label {
    color: rgba(255, 255, 255, 0.5);
    font-weight: 300;
    font-size: 0.875rem;
  }

  .summary-total-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0.5rem;
  }

  .total-label {
    color: rgba(255, 255, 255, 0.7);
    font-weight: 400;
    font-size: 1.125rem;
  }

  .total-price {
    color: #ffffff;
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: -0.025em;
  }

  .secure-badge {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.3);
    font-weight: 300;
  }

  .stripe-logo-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.2rem 0.6rem;
    border-radius: 9999px;
    background-color: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.08);
  }

  .stripe-logo-mark {
    color: #6772e5;
    font-weight: 600;
    text-transform: lowercase;
    letter-spacing: 0.05em;
  }

  /* Payment Header / Icons */
  .payment-header-flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    position: relative;
    z-index: 10;
  }

  .card-icons {
    display: flex;
    gap: 0.5rem;
  }

  .card-icon-box {
    width: 2rem;
    height: 1.25rem;
    border-radius: 0.25rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .mc-red { width: 0.75rem; height: 0.75rem; border-radius: 50%; background-color: rgba(239, 68, 68, 0.8); margin-right: -0.25rem; }
  .mc-orange { width: 0.75rem; height: 0.75rem; border-radius: 50%; background-color: rgba(249, 115, 22, 0.8); mix-blend-mode: screen; }
  
  .visa-text {
    font-style: italic;
    font-size: 8px;
    color: rgba(255, 255, 255, 0.8);
    font-family: serif;
  }

  /* Visual Credit Card */
  .visual-card {
    width: 100%;
    max-width: 24rem;
    margin: 0 auto 2.5rem;
    height: 13rem;
    background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 1rem;
    padding: 1.5rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.3);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .visual-card-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.05), transparent);
    pointer-events: none;
  }

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    position: relative;
    z-index: 10;
  }

  .chip {
    width: 2.5rem;
    height: 2rem;
    border-radius: 0.25rem;
    background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
    border: 1px solid rgba(255, 255, 255, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
  }

  .chip-line-h { width: 100%; height: 1px; background-color: rgba(255, 255, 255, 0.2); position: absolute; }
  .chip-line-v { width: 1px; height: 100%; background-color: rgba(255, 255, 255, 0.2); position: absolute; }

  .card-bottom {
    width: 100%;
    position: relative;
    z-index: 10;
  }

  .card-number-display {
    font-size: 1.25rem;
    letter-spacing: 0.15em;
    color: rgba(255, 255, 255, 0.9);
    font-weight: 300;
    margin-bottom: 1rem;
  }

  .card-details-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .card-label {
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.4);
    margin-bottom: 0.25rem;
  }

  .card-value {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.8);
    letter-spacing: 0.05em;
    font-weight: 300;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
  }

  .text-right { text-align: right; }

  /* Payment Form */
  .payment-form {
    position: relative;
    z-index: 10;
  }

  .form-group {
    margin-bottom: 1.25rem;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    margin-bottom: 1.25rem;
  }

  .form-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: rgba(255, 255, 255, 0.4);
    margin-left: 0.25rem;
    display: block;
    margin-bottom: 0.375rem;
  }

  .form-input {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 0.75rem;
    padding: 0.75rem 1rem;
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.875rem;
    transition: all 0.2s;
    outline: none;
    font-weight: 300;
  }

  .form-input:hover {
    border-color: rgba(255, 255, 255, 0.2);
  }

  .form-input:focus {
    border-color: rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.1);
  }

  .form-input::placeholder {
    color: rgba(255, 255, 255, 0.2);
    font-weight: 300;
  }

  .card-element {
    width: 100%;
    padding: 0.9rem 1rem;
    border-radius: 0.75rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background-color: rgba(255, 255, 255, 0.05);
    color: rgba(255, 255, 255, 0.95);
  }

  .input-tracked {
    letter-spacing: 0.1em;
  }

  .submit-btn {
    width: 100%;
    margin-top: 1.5rem;
    background-color: #ffffff;
    color: #000000;
    transition: background-color 0.2s;
    border-radius: 0.75rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: none;
    cursor: pointer;
  }

  .submit-btn:hover {
    background-color: #e5e7eb;
  }

  .submit-btn span {
    font-weight: 400;
    font-size: 0.875rem;
    letter-spacing: 0.025em;
  }

  .submit-btn svg {
    transition: transform 0.2s;
  }

  .submit-btn:hover svg {
    transform: translateX(4px);
  }

  .text-danger {
    color: #f87171;
  }

  .text-success {
    color: #4ade80;
  }

  .mt-3 {
    margin-top: 1rem;
  }

  /* Responsive Adjustments */
  @media (min-width: 768px) {
    .header-title {
      font-size: 3rem;
    }
    .header-desc {
      font-size: 1rem;
    }
    .card-number-display {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 1024px) {
    .checkout-grid {
      grid-template-columns: repeat(12, 1fr);
    }
    .col-left {
      grid-column: span 5;
    }
    .col-right {
      grid-column: span 7;
    }
    .summary-panel {
      margin-bottom: 0;
    }
  }
`;

export default function App() {
  return (
    <>
      <style>{customStyles}</style>
      <div className="app-container">
        {/* Ambient Background Glows */}
        <div className="glow-top" />
        <div className="glow-bottom" />

        {/* Header / Banner Section */}
        <section className="header-section">
          <div className="header-content">
            <h4 className="upr-head">Secure Checkout</h4>
            <h1 className="main-heading">
              Complete Your <span>Purchase</span>
            </h1>
            <p className="main-pera">
              Review your selected package and choose your preferred payment method.
              Your order will be processed securely with end-to-end encryption.
            </p>
          </div>
        </section>

        {/* Checkout Section Component */}
        <CheckoutSection />
      </div>
    </>
  );
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

function CheckoutSection() {
  const [packageName, setPackageName] = useState('Premium Logo Package');
  const [packagePrice, setPackagePrice] = useState(300.0);
  const [packageLoaded, setPackageLoaded] = useState(false);

  const [cardholderName, setCardholderName] = useState('');
  const [stripe, setStripe] = useState(null);
  const [cardElement, setCardElement] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [paymentIntentId, setPaymentIntentId] = useState('');
  const [paymentStatus, setPaymentStatus] = useState('');
  const [idempotencyKey, setIdempotencyKey] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const cardElementRef = useRef(null);

  useEffect(() => {
    stripePromise
      .then((loadedStripe) => setStripe(loadedStripe))
      .catch(() => setError('Unable to load Stripe.'));
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storedPackage = sessionStorage.getItem('checkoutPackage');
    if (storedPackage) {
      try {
        const parsed = JSON.parse(storedPackage);
        if (parsed.packageName) {
          setPackageName(parsed.packageName);
        }
        if (parsed.price && !Number.isNaN(Number(parsed.price))) {
          setPackagePrice(Number(parsed.price));
        }
      } catch {
        // ignore invalid stored payload
      }
    }

    let storedKey = sessionStorage.getItem('checkoutIdempotencyKey');
    if (!storedKey) {
      storedKey = crypto?.randomUUID?.() || `req-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      sessionStorage.setItem('checkoutIdempotencyKey', storedKey);
    }
    setIdempotencyKey(storedKey);
    setPackageLoaded(true);
  }, []);

  useEffect(() => {
    if (!stripe || !packageLoaded) {
      return;
    }

    const initPaymentIntent = async () => {
      try {
        const response = await fetch(API_ENDPOINTS.stripePaymentIntent, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            packageName,
            price: packagePrice,
            customer: { fullName: '' },
            idempotencyKey,
          }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || 'Unable to initialize payment.');
        }

        setClientSecret(data.clientSecret);
        setPaymentIntentId(data.paymentIntentId || '');
      } catch (err) {
        setError(err.message || 'Unable to initialize Stripe payment.');
      } finally {
        setIsLoading(false);
      }
    };

    initPaymentIntent();
  }, [stripe, packageLoaded, packageName, packagePrice, idempotencyKey]);

  useEffect(() => {
    if (!stripe || !cardElementRef.current) {
      return;
    }

    const elementsInstance = stripe.elements();
    const card = elementsInstance.create('card', {
      style: {
        base: {
          color: 'rgba(255, 255, 255, 0.95)',
          fontSize: '16px',
          fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
          '::placeholder': {
            color: 'rgba(255, 255, 255, 0.4)',
          },
        },
        invalid: {
          color: '#f87171',
          iconColor: '#f87171',
        },
      },
    });

    card.mount(cardElementRef.current);
    setCardElement(card);

    return () => {
      card.destroy();
      elementsInstance.unmount();
    };
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !cardElement || !clientSecret) {
      return;
    }

    setIsSubmitting(true);
    setError('');
    setPaymentStatus('');

    const { error: paymentError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: cardElement,
        billing_details: {
          name: cardholderName || 'Customer',
        },
      },
    });

    if (paymentError) {
      setError(paymentError.message || 'Payment confirmation failed.');
    } else if (paymentIntent?.status === 'succeeded') {
      try {
        await fetch(API_ENDPOINTS.stripePaymentConfirm, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            paymentIntentId: paymentIntent.id,
            status: paymentIntent.status,
            packageName,
            price: packagePrice,
            customerName: cardholderName,
            customerEmail: '',
            customerPhone: '',
          }),
        });
      } catch (confirmError) {
        console.error('Confirmation save failed', confirmError);
      }

      const invoicePayload = {
        paymentIntentId: paymentIntent.id,
        packageName,
        amount: packagePrice,
        status: paymentIntent.status,
        customerName: cardholderName,
        date: new Date().toLocaleString(),
      };
      window.localStorage.setItem('paymentInvoice', JSON.stringify(invoicePayload));
      window.location.href = '/thankyou';
      return;
    } else {
      setError('Payment could not be completed.');
    }

    setIsSubmitting(false);
  };

  return (
    <section className="checkout-section">
      <div className="checkout-container checkout-grid">
        
        {/* Left Column: Order Summary */}
        <div className="col-left summary-panel">
          <div className="glass-panel">
            <h2 className="panel-title">
              <Zap size={20} className="icon-indigo" />
              Order Summary
            </h2>
            
            <div>
              <div className="summary-row">
                <div>
                  <h3 className="summary-title">{packageName}</h3>
                  <p className="summary-desc">Includes source files, 5 revisions, and social media kit.</p>
                </div>
                <span className="summary-price">${packagePrice.toFixed(2)}</span>
              </div>
              
              <div className="summary-row summary-row-center">
                <span className="summary-label">Subtotal</span>
                <span className="summary-price">${packagePrice.toFixed(2)}</span>
              </div>

              <div className="summary-row summary-row-center">
                <span className="summary-label">Taxes (Calculated at checkout)</span>
                <span className="summary-price">$0.00</span>
              </div>

              <div className="summary-total-row">
                <span className="total-label">Total</span>
                <span className="total-price">${packagePrice.toFixed(2)}</span>
              </div>
            </div>

            <div className="secure-badge">
              <Lock size={12} />
              <span>Secured by Stripe</span>
              <div className="stripe-logo-badge">
                <span className="stripe-logo-mark">stripe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Payment Details */}
        <div className="col-right">
          <div className="glass-panel">
            
            {/* Inner ambient glow for the glass card */}
            <div className="glow-inner" />

            <div className="payment-header-flex">
              <h2 className="panel-title" style={{ marginBottom: 0 }}>
                <CreditCard size={20} className="icon-blue" />
                Payment Method
              </h2>
              <div className="card-icons">
                {/* Minimalist Card Icons */}
                <div className="card-icon-box">
                  <div className="mc-red" />
                  <div className="mc-orange" />
                </div>
                <div className="card-icon-box visa-text">
                  Visa
                </div>
              </div>
            </div>

            {/* Visual Glassmorphic Credit Card */}
            <div className="visual-card">
              <div className="visual-card-bg" />
              
              <div className="card-top">
                {/* Microchip representation */}
                <div className="chip">
                  <div className="chip-line-h" />
                  <div className="chip-line-v" />
                </div>
                <ShieldCheck size={24} color="rgba(255, 255, 255, 0.3)" />
              </div>

              <div className="card-bottom">
                <div className="card-number-display">•••• •••• •••• ••••</div>
                
                <div className="card-details-row">
                  <div>
                    <div className="card-label">Cardholder</div>
                    <div className="card-value">
                      {cardholderName || 'YOUR NAME'}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="card-label">Expires</div>
                    <div className="card-value">MM/YY</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <form className="payment-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Cardholder Name</label>
                <input
                  type="text"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  placeholder="John Doe"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Card Details</label>
                <div className="card-element" ref={cardElementRef} />
              </div>

              {error ? <p className="text-danger mt-3">{error}</p> : null}
              {paymentStatus ? <p className="text-success mt-3">{paymentStatus}</p> : null}

              <button className="submit-btn" type="submit" disabled={!stripe || isSubmitting || isLoading || !clientSecret}>
                <span>{isSubmitting ? 'Processing...' : `Pay $${packagePrice.toFixed(2)} Now`}</span>
                <ChevronRight size={16} />
              </button>
            </form>

          </div>
        </div>
        
      </div>
    </section>
  );
}