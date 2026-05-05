"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { API_ENDPOINTS } from "../../lib/api";

const CHECKOUT_STORAGE_KEY = "checkoutPackage";

export default function PackagesSection() {
  const router = useRouter();
  const [categories, setCategories] = useState([]);
  const [activeTab, setActiveTab] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadPackages() {
      setIsLoading(true);
      setError("");

      try {
        const response = await fetch(API_ENDPOINTS.packages);
        if (!response.ok) {
          throw new Error(`Failed to fetch packages: ${response.statusText}`);
        }

        const data = await response.json();
        const normalizedCategories = Array.isArray(data)
          ? data
          : Array.isArray(data?.data)
          ? data.data
          : [];

        setCategories(normalizedCategories);
        setActiveTab(normalizedCategories?.[0]?.slug ?? "");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unable to load packages.");
      } finally {
        setIsLoading(false);
      }
    }

    loadPackages();
  }, []);

  const goToCheckout = (packageName, price) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(CHECKOUT_STORAGE_KEY, JSON.stringify({ packageName, price }));
    }
    router.push("/checkout");
  };

  if (isLoading) {
    return (
      <section className="packagewrp">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <div className="txtwrp">
                <h4 className="upr-head">Loading packages...</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="packagewrp">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <p className="main-pera text-danger">{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const safeCategories = Array.isArray(categories) ? categories : [];

  return (
    <section className="packagewrp">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <div className="txtwrp">
              <h4 className="upr-head">What is going to be the Cost?</h4>
              <h2 className="main-heading">
                See Our Creative <span>Brilliance in Action</span>
              </h2>
              <p className="main-pera">
                The American Logo believes in providing value for money offers; that is why we offer packages specially designed for your needs.
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="tabingwrp">
              <ul>
                {safeCategories.map((category) => (
                  <li
                    key={category.slug}
                    className={activeTab === category.slug ? "current" : ""}
                    onClick={() => setActiveTab(category.slug)}
                  >
                    {category.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {safeCategories.map((category) => (
          <div key={category.slug} className={`tabs ${activeTab === category.slug ? "current" : ""}`}>
            <div className="row justify-content-center">
              {category.packages?.map((item) => (
                <div className="col-md-4 justify-content-center" key={`${category.slug}-${item.name}`}>
                  <div className="titlebox">
                    <h4>{item.name}</h4>
                    <p>{item.description}</p>
                  </div>
                  <div className="pkgbox">
                    <div className="pricebox">
                      <sup>$</sup>
                      <h3>{item.price}</h3>
                    </div>
                    <button className="grad-btn const-place-order" type="button" onClick={() => goToCheckout(item.name, item.price)}>
                      Continue to Checkout
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
