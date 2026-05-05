import HomePortfolioSlider from "../../components/HomePortfolioSlider";
import Testimonials from "../../components/Testimonials";
import BottomForm from "../../components/BottomForm";

export const metadata = {
  title: "Portfolio",
  description: "The American Logo",
};

export default function Page() {
  return (
    <>      <div>
      <section className="home-bannerwrp servicebnr pkge-pg about-pg  ">
        {/* <div class="video-overlay"></div> */}
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center my-auto">
              <div className="txtwrp">
                <h4 className="upr-head">OUR PORTFOLIO</h4>
                <h1>WORK SPEAK <span>LOUDER THAN WORD</span></h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfoliowrp" style={{ background: 'none' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="txtwrp">
                <h2 className="main-heading">Our <span>featured works</span></h2>
                <p className="text-center main-pera">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
              </div>
            </div>
          </div>
        </div>
        <HomePortfolioSlider />
      </section>
    </div>

      <Testimonials />
      <BottomForm />    </>
  );
}
