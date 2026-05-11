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
  title: "Website Development",
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
                    <h2 className="main-heading">Developing Websites and <br /><span>Long Term Working Relationships</span></h2>
                    <p className="main-pera">Whether you are a start-up or an enterprise business, our expertise in 360 web and web solutions and digital branding will turn your ideas into online success.</p>
                    <ul>
                      <li>Informative Website <span>$449</span></li>
                      <li>Create and develop Unlimited pages</li>
                      <li>A custom website design &amp; development in 14days</li>
                      <li>Creative concept from professional designer with in 24hrs</li>
                      <li>Full copyright and production ready files</li>
                      <li>100% satisfaction guarantee</li>
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
                <img className="lazy" src="/assets/images/website-development-first-fold.png" alt="Website development preview" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="txtwrp">
                <h4 className="upr-head">LET YOUR VOICE BE THE LOUDEST!</h4>
                <h2 className="main-heading">Developing Websites and<span> Long Term Working Relationships</span></h2>
                <p className="main-pera">Customers search for things by using keywords. These keywords will link them to your website. For a valuable search engine, you need to have good web development. At The American Logo, our team comprises of highly talented individuals who know how to make your website interactive. We offer solutions for businesses looking for a smooth working website with an excellent UI. From basic websites to complex requirements, our team fulfills it all!</p>
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
              <div className="txtwrp" style={{padding: '80px 0 0'}}>
                <h4 className="upr-head">Custom Web Design that Convert Clients</h4>
                <h2 className="main-heading">Let Us Build Real-Time,<span> Interactive Websites For Your Business</span></h2>
                <p className="main-pera wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>Having a website is important for gaining digital visibility and expanding business reach. Therefore at The American Logo, we not only create a visually <br />appealing website but also take into account the technical side too. </p>
                <p className="main-pera"> We develop a website with SEO optimized content, faster loading time, interactive features and a mobile-friendly layout to improve user <br />experience. </p>
                <br />
                <div className="btnwrp">
                  <a className="btn-1 button_banner_quote mypop pulse-button" style={{cursor: 'pointer'}} href="/get-started">Let's Get Started</a>
                  <a className="btn-2" href="tel:+1 (214) 531-3914">+1 (214) 531-3914</a>
                </div>
              </div>
            </div>	
            <div className="col-md-6 my-auto">
              <div className="imgwrp">
                <img className="lazy loaded" src="/assets/images/website-development-last-fold.png" data-src="/assets/images/website-development-last-fold.png" data-was-processed="true" alt="Interactive website design samples" />
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


