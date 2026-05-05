"use client";

import { useEffect, useState } from 'react';
import './Invoice.css'; // Import your pure CSS file here

export default function InvoiceClient() {
  const [invoice, setInvoice] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedInvoice = window.localStorage.getItem('paymentInvoice');
    if (storedInvoice) {
      setInvoice(JSON.parse(storedInvoice));
      window.localStorage.removeItem('paymentInvoice');
    }
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <section className="invoice-section-dark">
      <div className="invoice-card">
        
        {/* Header Section */}
        <div className="invoice-header">
          <div className="success-icon">
            <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2>Payment Successful</h2>
          <p>
            {invoice 
              ? "Your transaction has been completed. Below is your receipt."
              : "We've noted down your information and will get back to you soon."}
          </p>
        </div>

        {/* Body Section */}
        <div className="invoice-body">
          {invoice ? (
            <>
              <div className="invoice-summary-header">
                <h3>Invoice Summary</h3>
                <span className="status-badge">{invoice.status}</span>
              </div>

              <dl className="invoice-details-list">
                <div className="detail-row">
                  <dt>Package</dt>
                  <dd>{invoice.packageName}</dd>
                </div>
                
                <div className="detail-row">
                  <dt>Customer</dt>
                  <dd>{invoice.customerName || 'N/A'}</dd>
                </div>

                <div className="detail-row">
                  <dt>Date</dt>
                  <dd>{invoice.date}</dd>
                </div>

                <div className="detail-row">
                  <dt>Transaction ID</dt>
                  <dd className="mono-text">{invoice.paymentIntentId}</dd>
                </div>
              </dl>

              <div className="invoice-total">
                <span>Total Amount</span>
                <strong>${invoice.amount.toFixed(2)}</strong>
              </div>
            </>
          ) : (
            <div className="empty-state">
              <p>Thank you for your submission. No current invoice data was found for this session.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}