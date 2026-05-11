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
  title: "Search Engine Optimization",
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
                    <h2 className="main-heading">Let Customers Find Your <br /> <span>Business On Google</span></h2>
                    <p className="main-pera">Turn web traffic into customers with strategic SEO services made custom for your business. Our team of experts guarantees to put you on top of Google’s search results for revenue-generating targeted keywords.</p>
                    <ul>
                      <li>Conversion Rate Optimization</li>
                      <li>Online Reputation Management</li>
                      <li>Monthly Statistical Audits</li>
                      <li>Local Citations and Profiles</li>
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
                <img className="lazy" src="/assets/images/seo-1.png" alt="SEO performance illustration" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="txtwrp">
                <h4 className="upr-head wow">SEO SERVICES IN USA</h4>
                <h2 className="main-heading">Get More Traffic Working With <br /> <span>Our Reliable SEO Services USA</span></h2>
                <p className="main-pera wow fadeInUp">If you are looking for more traffic to your website, then it’s time to hire The American Logo. Our team consists of the content writers, link builders, and SEO consultants to deliver you the best results. We help you get a higher natural, organic ranking through both local and national SEO strategies. Our goal is to increase clients’ site traffic and improve conversion rates for profit growth.</p>
                <br />
                <p className="main-pera wow fadeInUp">The American Logo designs the right SEO strategy for each client after having a thorough discussion and understanding the ultimate needs of the clients. We promise tailor-made solutions that help clients achieve their objectives in a limited time frame and according to their budget.</p>
                <br />
                <ul className="tks">
                  <li>
                    <i className="fa fa-pencil" aria-hidden="true" />
                    <span>Detailed On-page Audit</span>
                  </li>
                  <li>
                    <i className="fa fa-hand-o-up" aria-hidden="true" />
                    <span>Strategic Keyword Research</span>
                  </li>
                  <li>
                    <i className="fa fa-picture-o" aria-hidden="true" />
                    <span>Unmatched Off-page Optimization</span>
                  </li>
                  <li>
                    <i className="fa fa-picture-o" aria-hidden="true" />
                    <span>Affordable Marketing Packages</span>
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
                <h4 className="upr-head">Let’s Get You Ranked!</h4>
                <h2 className="main-heading">Grow Online Customers <br /> <span>And Increase Revenue</span></h2>
                <p className="main-pera wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>No business in the world can flourish without customers. At The American Logo, our experts understand that and build a strategy that suits your goals. From getting more business inquiries, to increasing ecommerce website sales, our team of SEO professionals create a strategy that gets you exactly what you’re looking for – increase in revenue.</p>
                <br />
                <div className="btnwrp">
                  <a className="btn-1 button_banner_quote mypop pulse-button" style={{cursor: 'pointer'}} href="/get-started">Let's Get Started</a>
                  <a className="btn-2" href="tel:+1 (214) 531-3914">+1 (214) 531-3914</a>
                </div>
              </div>
            </div>	
            <div className="col-md-6 my-auto">
              <div className="imgwrp">
                <img className="lazy loaded" src="/assets/images/seo-2.png" data-src="/assets/images/seo-2.png" data-was-processed="true" alt="Search ranking growth graphic" />
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


