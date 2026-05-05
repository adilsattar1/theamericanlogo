import Image from "next/image";
import LeadForm from "./forms/LeadForm";
import { API_ENDPOINTS } from "../lib/api";

export default function BottomForm() {
  return (
    <>
      <section className="bottmform">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="imgwrp">
                <Image src="/assets/images/f1d2f1d.png" alt="Consultation" width={640} height={520} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="formwrp">
                <h2 className="main-heading">Your First <span>Consultation Is On Us!</span></h2>
                <p className="main-pera">Our team of The American Logos’ hates charging people solely for answering their questions. This is why your first consultation is on us – and its always free. Ask as many questions as possible and our marketing experts will help guide you through with the proper answers.</p>
                <LeadForm endpoint={API_ENDPOINTS.lead} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
