import Bannerform from "../../components/Bannerform";
import ClientLogos from "../../components/ClientLogos";
import Rate from "../../components/Rate";
import Port1 from "../../components/Port1";
import Cta from "../../components/Cta";
import Pkg2 from "../../components/Pkg2";
import New1 from "../../components/New1";
import Testimonials from "../../components/Testimonials";
import BottomForm from "../../components/BottomForm";

export const metadata = {
  title: "Logo Design",
  description: "The American Logo",
};

export default function Page() {
  return (
    <>      <section className="home-baneerwrp">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="row ">					
                <div className="col-md-10">
                  <div className="txtwrp" style={{textAlign: 'left'}}>					
                    <h2 className="main-heading">GET RECOGNIZED IN A <span>BLINK OF AN EYE</span></h2>
                    <p className="main-pera">At The American Logo, we are your one-stop solution to creative and unique logos that represent your brand identity. Get your logos designed by us and enjoy a 100% unique logo tailored to your exact business needs.</p>
                    <ul>
                      <li>Top-Notch Designers and Developers</li>
                      <li>Fastest Turn-Around Time</li>
                      <li>100% Money-Back Guarantee</li>
                      <li>100% Customer Satisfication</li>
                    </ul>
                    <ul className="trustwrp">
                      <li className="icn-n">
                        <img className="lazy" src="/assets/images/trust.webp" alt="Trust badge" />
                      </li>
                      <li className="icn-n">
                        <img className="lazy" src="/assets/images/google.webp" alt="Google logo" />
                      </li>
                      <li className="icn-n">
                        <img className="lazy magr-img" src="/assets/images/bings-logo.webp" alt="Bing logo" />
                      </li>
                    </ul>
                  </div>	
                </div>
              </div>		
            </div>
            <Bannerform />
            <div className="btnwrp pding">
        <a className="btn-1" href="/get-started">Let's Get Started</a>
        <a className="btn-2" href="tel:+1 (214) 531-3914"> <i className="fa fa-phone" aria-hidden="true" />+1 (682) 345-9960</a>
      </div>
          </div>
        </div>
      </section>
      
      <ClientLogos />
      <section className="secnd-fld">
        <div className="container">
          <div className="row mrgn-btm">
            <div className="col-md-6 my-auto">
              <div className="imgwrp">
                <img className="lazy" src="/assets/images/logo-banner-last-fold.png" alt="Logo design showcase" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="txtwrp">
                <h4 className="upr-head">Custom Logo Design Services</h4>
                <h2 className="main-heading">Logos That Push Your <br /> <span>Brand Forward</span></h2>
                <p className="main-pera wow fadeInUp">A logo will act as a foundation for your brand. Every company needs a logo before diving into the business world. With an eye-catching logo, your brand will have its own identity that will attract potential customers. At The American Logo, we ensure that we design a logo that will communicate your brand message and values to everyone effectively.</p>
                <br />
                <ul className="tks">
                  <li>
                    <i className="fa fa-pencil" aria-hidden="true" />
                    <span>Custom Design &amp; Develop</span>
                  </li>
                  <li>
                    <i className="fa fa-hand-o-up" aria-hidden="true" />
                    <span>Design Concept with in 24hours</span>
                  </li>
                  <li>
                    <i className="fa fa-picture-o" aria-hidden="true" />
                    <span>Project Completion 14Days</span>
                  </li>
                  <li>
                    <i className="fa fa-picture-o" aria-hidden="true" />
                    <span>100% Satisfaction Guarantee</span>
                  </li>
                </ul>
              </div>
              <div className="btnwrp">
                <a className="btn-1 button_banner_quote mypop pulse-button" style={{cursor: 'pointer'}} href="/get-started">Let's Get Started</a>
                <a className="btn-2" href="tel:+1 (214) 531-3914">+1 (682) 345-9960</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Rate />
      <Port1 />
      <Cta />
      <Pkg2 />
      <section className="secnd-fld">
        <div className="container">
          <div className="row mrgn-btm">
            <div className="col-md-6">
              <div className="txtwrp">
                <h4 className="upr-head">Why 3D Logo Design Services</h4>
                <h2 className="main-heading">A Reliable Logo Design Agency That Gives <span>Better Results for Your Business’s Success</span></h2>
                <p className="main-pera wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>The basic reason to have logo is to hold a symbolic identity, which reflects your brand’s philosophy, should be eye-catching and must be remarkable. These are the common objectives that have always been endeavored to achieve in 2 dimension. However, with the evolution of technology.</p>
                <br />
                <div className="btnwrp">
                  <a className="btn-1 button_banner_quote mypop pulse-button" style={{cursor: 'pointer'}} href="/get-started">Let's Get Started</a>
                  <a className="btn-2" href="tel:+1 (214) 531-3914">+1 (682) 345-9960</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-auto">
              <div className="imgwrp">
                <img className="lazy loaded" src="/assets/images/logo-design-first-fold.png" data-src="/assets/images/logo-design-first-fold.png" data-was-processed="true" alt="Custom logo design examples" />
              </div>
            </div>	
          </div>
        </div>
      </section>
      
      <New1 />
      <Testimonials />
      <BottomForm />    </>
  );
}

