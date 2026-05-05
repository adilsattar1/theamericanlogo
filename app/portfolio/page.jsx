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
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <div className="img-portion">
                <ul className="home-port-slider">
                  <li>
                    <a data-fancybox="port" href="/assets/images/portfolios/7.png">
                      <figure>
                        <img className="widftttt" src="/assets/images/portfolios/7.png" alt="" />
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a data-fancybox="port" href="/assets/images/portfolios/5.png">
                      <figure>
                        <img className="heigtttt" src="/assets/images/portfolios/5.png" alt="" />
                      </figure>
                    </a>
                  </li>
                  <li className="widdth sizzze">
                    <a data-fancybox="port" href="/assets/images/portfolios/2.png">
                      <figure>
                        <img className="widftttt" src="/assets/images/portfolios/2.png" alt="" />
                      </figure>
                    </a>
                  </li>
                  <li className="">
                    <a data-fancybox="port" href="/assets/images/portfolios/3.png">
                      <figure>
                        <img className="heigtttt" src="/assets/images/portfolios/3.png" alt="" />
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a data-fancybox="port" href="/assets/images/portfolios/4.png">
                      <figure>
                        <img className="widftttt" src="/assets/images/portfolios/4.png" alt="" />
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a data-fancybox="port" href="/assets/images/portfolios/5.png">
                      <figure>
                        <img className="heigtttt" src="/assets/images/portfolios/5.png" alt="" />
                      </figure>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="img-portion">
                <ul dir="rtl" className="home-port-slider2">
                  <li>
                    <a data-fancybox="port" href="/assets/images/portfolios/1.png">
                      <figure>
                        <img className="widftttt" src="/assets/images/portfolios/1.png" alt="" />
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a data-fancybox="port" href="/assets/images/portfolios/5.png">
                      <figure>
                        <img className="heigtttt" src="/assets/images/portfolios/5.png" alt="" />
                      </figure>
                    </a>
                  </li>
                  <li className="widdth sizzze">
                    <a data-fancybox="port" href="/assets/images/portfolios/8.png">
                      <figure>
                        <img className="widftttt" src="/assets/images/portfolios/8.png" alt="" />
                      </figure>
                    </a>
                  </li>
                  <li className="">
                    <a data-fancybox="port" href="/assets/images/portfolios/3.png">
                      <figure>
                        <img className="heigtttt" src="/assets/images/portfolios/3.png" alt="" />
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a data-fancybox="port" href="/assets/images/portfolios/4.png">
                      <figure>
                        <img className="widftttt" src="/assets/images/portfolios/4.png" alt="" />
                      </figure>
                    </a>
                  </li>
                  <li>
                    <a data-fancybox="port" href="/assets/images/portfolios/5.png">
                      <figure>
                        <img className="heigtttt" src="/assets/images/portfolios/5.png" alt="" />
                      </figure>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

      <Testimonials />
      <BottomForm />    </>
  );
}
