import Testimonials from "../../components/Testimonials";
import BottomForm from "../../components/BottomForm";
import PackagesSection from "../../components/packages/PackagesSection";
import { buildMetadata } from "../../lib/seo";

export const metadata = buildMetadata({
  title: "Packages",
  description: "Explore logo, web, SEO, and marketing packages with secure checkout options.",
  keywords: ["pricing", "logo package", "web package", "seo package", "smm package"],
  path: "/packages",
});

export default function Page() {
  return (
    <>
      <section className="home-bannerwrp servicebnr pkge-pg about-pg">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center my-auto">
              <div className="txtwrp">
                <h4 className="upr-head">OUR PACKAGES</h4>
                <h1>
                  MOST AFFORDABLE<span> PACKAGES</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PackagesSection />
      <Testimonials />
      <BottomForm />
    </>
  );
}
