"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { API_ENDPOINTS, postJson } from "../../lib/api";

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const SESSION_KEY = "abandonedLeadSessionId";

function getSessionId() {
  if (typeof window === "undefined") {
    return "";
  }

  let sessionId = sessionStorage.getItem(SESSION_KEY);
  if (!sessionId) {
    sessionId = crypto.randomUUID?.() ?? `lead-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
    sessionStorage.setItem(SESSION_KEY, sessionId);
  }
  return sessionId;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function LeadForm({
  endpoint = API_ENDPOINTS.lead,
  buttonText = "Submit",
  className = "",
}) {
  const [formData, setFormData] = useState(initialState);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [pageUrl, setPageUrl] = useState("");
  const timeoutRef = useRef(null);

  const formType = useMemo(
    () => (endpoint.includes("/contact") ? "contact" : "lead"),
    [endpoint],
  );

  useEffect(() => {
    setSessionId(getSessionId());
    if (typeof window !== "undefined") {
      setPageUrl(window.location.href);
    }
  }, []);

  useEffect(() => {
    if (!sessionId || !isValidEmail(formData.email)) {
      return;
    }

    const hasAnyInput = Boolean(
      formData.name || formData.phone || formData.service || formData.message,
    );

    if (!hasAnyInput) {
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(async () => {
      try {
        await fetch(API_ENDPOINTS.abandonedContact, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            session_id: sessionId,
            form_type: formType,
            page_url: pageUrl,
            ...formData,
          }),
        });
      } catch {
        // intentionally silent; abandoned lead saving should not block the UI
      }
    }, 1000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [sessionId, formData, formType, pageUrl]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await postJson(endpoint, { ...formData, session_id: sessionId });
      setStatus({ type: "success", message: "Thanks! We will contact you shortly." });
      setFormData(initialState);
    } catch (error) {
      setStatus({ type: "error", message: error.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className={className}>
      <div className="row">
        <div className="col-md-6">
          <div className="labelwrp">
            <input type="text" name="name" placeholder="Full Name*" value={formData.name} onChange={onChange} required />
          </div>
        </div>
        <div className="col-md-6">
          <div className="labelwrp">
            <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={onChange} required />
          </div>
        </div>
        <div className="col-md-12">
          <div className="labelwrp">
            <input type="tel" name="phone" placeholder="Phone Number*" value={formData.phone} onChange={onChange} required />
          </div>
        </div>
        <div className="col-md-12">
          <div className="labelwrp">
            <select name="service" value={formData.service} onChange={onChange} required>
              <option value="">Select Services</option>
              <option value="Logo Design">Logo Design</option>
              <option value="2D & 3D Illustration">2D & 3D Illustration</option>
              <option value="Website Development">Website Development</option>
              <option value="SEO">SEO</option>
              <option value="Social Media Marketing">Social Media Marketing</option>
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="labelwrp">
            <textarea name="message" placeholder="Enter message here" value={formData.message} onChange={onChange} />
          </div>
        </div>
        <div className="col-md-12">
          <div className="labelwrp text-center">
            <button className="btnmain" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : buttonText}
            </button>
          </div>
        </div>
      </div>
      {status.message ? <p className={status.type === "error" ? "text-danger" : "text-success"}>{status.message}</p> : null}
    </form>
  );
}
