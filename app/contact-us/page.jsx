import ClientLogos from "../../components/ClientLogos";
import LeadForm from "../../components/forms/LeadForm";
import { API_ENDPOINTS } from "../../lib/api";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Talk to our team 24/7 for logo design, development, and digital marketing services.",
  keywords: ["contact", "support", "logo design agency", "marketing consultation"],
  path: "/contact-us",
});

export default function Page() {
  return (
    <>
      <section className="home-bannerwrp servicebnr pkge-pg about-pg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center my-auto">
              <div className="txtwrp">
                <h1>
                  Get In Touch With Us <span>24/7!</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ClientLogos />
      <section className="bottmform">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="formwrp">
                <h2 className="main-heading text-center">
                  Are You <span>Ready To Rank?</span>
                </h2>
                <p className="main-pera text-center">
                  Fill out the form to connect with our experts and receive a custom strategy for your business.
                </p>
                <LeadForm endpoint={API_ENDPOINTS.contact} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
