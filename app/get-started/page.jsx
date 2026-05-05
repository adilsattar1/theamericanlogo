import LeadForm from "../../components/forms/LeadForm";
import { API_ENDPOINTS } from "../../lib/api";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Let's Get Started",
  description: "Start your branding and digital growth project with The American Logo.",
  keywords: ["get started", "lead form", "project inquiry"],
  path: "/get-started",
});

export default function Page() {
  return (
    <section className="bottmform">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="formwrp">
              <h2 className="main-heading text-center">
                Sign Up to Avail <span>50% Discount</span>
              </h2>
              <p className="main-pera text-center">
                Heads up! Sign up for The American Logo services and packages. We turn your ideas into successful outcomes.
              </p>
              <LeadForm endpoint={API_ENDPOINTS.lead} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
