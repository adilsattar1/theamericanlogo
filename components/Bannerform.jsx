import LeadForm from "./forms/LeadForm";
import { API_ENDPOINTS } from "../lib/api";

export default function Bannerform() {
  return (
    <>
      <div className="col-md-4 my-auto">
        <div className="formwrp-11">
          <h4>Let’s start a project together</h4>
          <h2>Ready to catch up on your application development?</h2>
          <LeadForm endpoint={API_ENDPOINTS.contact} buttonText="Connect With An Expert" />
          <div className="clrwrp">
            <a href="/contact-us"><i className="fa fa-user-plus" aria-hidden="true" />Speak With Our Expert</a>
            <a className="bnr-a" href="tel:+(682)345-9960">Call Now <span>+1 (682) 345-9960 </span></a>
          </div>
        </div>
      </div>
      
    </>
  );
}
