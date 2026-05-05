import ClientLogos from "../../components/ClientLogos";
import Cta from "../../components/Cta";
import Testimonials from "../../components/Testimonials";
import BottomForm from "../../components/BottomForm";

export const metadata = {
  title: "About Us",
  description: "The American Logo",
};

export default function Page() {
  return (
    <>      <section className="home-bannerwrp servicebnr pkge-pg about-pg  ">
        {/* <div class="video-overlay"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center my-auto">
              <div className="txtwrp">
                <h4 className="upr-head">INNOVATION IN ACTION</h4>
                <h1>WE DON’T STOP UNTIL <br /><span>WE MAKE YOUR IDEA WORK</span></h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ClientLogos />
      <div>
        <section className="simplesectionwrp">
          <div className="container">
            <div className="row">
              <div className="col-md-6 my-auto">
                <div className="txtwrp">
                  {/* <h4 class="upr-head">WHO WE ARE</h4> */}
                  <h2 className="main-heading">What is your <span> X factor ?</span></h2>
                  <p className="main-pera widt">The American Logo is a website design agency that helps service-based businesses unlock profitability and increase their valuation with over 2X to 10X exponentially.</p>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p> */}
                </div>
                <div className="btnwrp">
                  <a className="btn-1" href="/get-started">Let's Get Started</a>
                  <a className="btn-2" href="tel:+(682) 345-9960"> <i className="fa fa-phone" aria-hidden="true" />+1 (682) 345-9960</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="imgwrp">
                  <img src="/assets/images/about-us.png" className="about-sec" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="siloed">
          <div className="container">
            <div className="row">
              <div className="col-lg-12"> 
                <div className="main-heading">
                  <h2 className="main-heading">The American Logo is not a siloed, “get-it-done-and-run” <span>service provider.</span></h2>
                  <h6>We’re your partner, committed to end-vision success. We are more interested in the long-term success of our client relationships than we are in short-term gains.</h6>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="main-pera">This carries over into the way we approach all of our services. Before talking solutions, we drill deep into the problem with user research. Your intended customer is the only one who can provide critical insights to make or break your investment in new product development.</p>
                <p className="main-pera">We engage with future users before development to ensure your innovation meets a core need in a compelling way. With ClickModel software prototyping and market validation, we conduct lightweight user research to validate products before spending our client’s budget on building them.</p>
              </div>
              <div className="col-lg-6">
                <p className="main-pera">Human-centered through and through, our clients benefit from our global network of experts. We invest in relationships around the world so we always have an expert to weigh in on specific technical issues, legal matters that may impact your software product, and sales and service questions that direct features and development.</p>
                <p className="main-pera">They vet ideas and validate your assumptions so your product benefits from a diverse group of the world’s greatest thinkers.</p>
              </div>
            </div>
          </div>
        </section>  
        <section className="simplesectionwrp">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="imgwrp">
                  <img src="/assets/images/about-us-2.jpg" className="about-sec" />
                </div>
              </div>
              <div className="col-md-6 my-auto">
                <div className="txtwrp">
                  {/* <h4 class="upr-head">WHO WE ARE</h4> */}
                  <h2 className="main-heading">OUR <span>STRENGTH</span></h2>
                  <p className="main-pera widt">Our core values are representation of what we believe in and what we deliver. They bind every member of our team with each other and with our clients. They carve our path and lead us in the right direction.</p>
                  {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p> */}
                </div>
                <div className="btnwrp">
                  <a className="btn-1" href="/get-started">Let's Get Started</a>
                  <a className="btn-2" href="tel:+(682) 345-9960"> <i className="fa fa-phone" aria-hidden="true" />+1 (682) 345-9960</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Cta />
      <Testimonials />
      <BottomForm />    </>
  );
}
