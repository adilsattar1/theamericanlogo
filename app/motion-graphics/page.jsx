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
  title: "Motion Graphics",
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
                    <h2 className="main-heading">Motion Graphics Services <br /> <span>2d, 3d Animation Services</span></h2>
                    <p className="main-pera">Imagine if an image could draw thousands of words, you could perform actions at 25 frames per second. All the videos and animations we create can use magic to move the story behind a brand, product, or service.</p>
                    <ul>
                      <li>Top-Notch Designers and Animator</li>
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
                <img className="lazy" src="/assets/images/motion-graphics-first-fold.png" alt="Motion graphics animation preview" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="txtwrp">
                <h4 className="upr-head">Custom Animated Video</h4>
                <h2 className="main-heading">Bring Your Brand to Life With Our<br /><span> Custom Animation Services!</span> </h2>
                <p className="main-pera wow fadeInUp">Every brand needs a video or a logo that will set them apart from their competitors and represent what they are. With our dedicated team's help, you can do that by showing your customer the "real thing." From motion graphics to 3D and 2D animation, we provide all kinds of custom animation services.</p>
                <p className="main-pera wow fadeInUp">With your selection of characters, designs, and backgrounds, you can quickly deliver your message to your customers.</p>
                <br />
                <ul className="tks">
                  <li>
                    <i className="fa fa-pencil" aria-hidden="true" />
                    <span>2D &amp; 3D Animation</span>
                  </li>
                  <li>
                    <i className="fa fa-hand-o-up" aria-hidden="true" />
                    <span>Explainer Video Development</span>
                  </li>
                  <li>
                    <i className="fa fa-picture-o" aria-hidden="true" />
                    <span>Whiteboard Animation Video</span>
                  </li>
                  <li>
                    <i className="fa fa-picture-o" aria-hidden="true" />
                    <span>Cartoon Animation</span>
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
                <h4 className="upr-head">Premium Quality Animation Solution</h4>
                <h2 className="main-heading">Use the world wide web for all <br /> <span>that it has to offer</span></h2>
                <p className="main-pera wow fadeInUp" style={{visibility: 'visible', animationName: 'fadeInUp'}}>Animated gives a dynamic feel to your brand that cannot be described by static emblem. A bit motion is sometimes enough to grab the attention of your targeted audience. This might seem exaggeration but sometimes a vibrant effect proves to be the first step towards a successful conversion.</p>
                <br />
                <div className="btnwrp">
                  <a className="btn-1 button_banner_quote mypop pulse-button" style={{cursor: 'pointer'}} href="/get-started">Let's Get Started</a>
                  <a className="btn-2" href="tel:+1 (214) 531-3914">+1 (214) 531-3914</a>
                </div>
              </div>
            </div>	
            <div className="col-md-6 my-auto">
              <div className="imgwrp">
                <img className="lazy loaded" src="/assets/images/motion-graphics-last-fold.png" data-src="/assets/images/motion-graphics-last-fold.png" data-was-processed="true" alt="Animated brand visuals example" />
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


