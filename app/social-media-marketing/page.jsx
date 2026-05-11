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
  title: "Social Media Marketing",
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
                    <h2 className="main-heading">Social Media <span>Marketing</span></h2>
                    <p className="main-pera" style={{width: '65%'}}>Our creative designers provide you with too classy Social Media Marketing that impresses the customer.</p>
                    <ul>
                      <li>TOP-NOTCH DESIGNERS AND DEVELOPERS</li>
                      <li>FASTEST TURN-AROUND TIME</li>
                      <li>100% MONEY-BACK GUARANTEE</li>
                      <li>100% CUSTOMER SATISFACTION</li>
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
            <div className="btnwrp">
        <a className="btn-1" href="/get-started">Let's Get Started</a>
        <a className="btn-2" href="tel:+1 (214) 531-3914"> <i className="fa fa-phone" aria-hidden="true" />+1 (214) 531-3914</a>
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
                <img className="lazy" src="/assets/images/smm-1.png" alt="Social media marketing graphic" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="txtwrp">
                {/* <h4 class="upr-head wow fadeInUp">Illustration</h4> */}
                <h2 className="main-heading wow fadeInUp">Communicate effectively with your audience through our Social Media Marketing services!</h2>
                <p className="main-pera wow fadeInUp">At American Website Designers LLC, we provide Social Media Marketing to our clients to reach their audience more effectively. Social Media Marketing has different purposes for each of your audience segments; however, it’s more focused on supporting your sales and marketing efforts. Moreover, your brand can have better credibility with our help if you use our Social Media Marketing services.</p>
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
                <a className="btn-2" href="tel:+1 (214) 531-3914">+1 (214) 531-3914</a>
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
                <h2 className="main-heading wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>Digital Solutions that bring the results you desire!</h2>
                <p className="main-pera wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>The marketing synergy you seek can be achieved with the assistance of a Social Media Marketing firm. When working with the proper expert, your company's unique character will shine through in your internet marketing. You can use social media to let people know you still exist or promote a new product. Contact one of our Social Media Marketing specialists today to learn how your company may succeed in the same way that other companies have.</p>
                <br />
                <div className="btnwrp">
                  <a className="btn-1 button_banner_quote mypop pulse-button" style={{cursor: 'pointer'}} href="/get-started">Let's Get Started</a>
                  <a className="btn-2" href="tel:+1 (214) 531-3914">+1 (214) 531-3914</a>
                </div>
              </div>
            </div>	
            <div className="col-md-6 my-auto">
              <div className="imgwrp">
                <img className="lazy loaded" src="/assets/images/smm-2.png" data-src="/assets/images/smm-2.png" data-was-processed="true" alt="Digital marketing growth visual" />
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


