import Cta from "../../components/Cta";
import BottomForm from "../../components/BottomForm";

export const metadata = {
  title: "Testimonials",
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
                  {/* <h4 class="upr-head">Our Testimonials</h4> */}
                  <h1>Our <span>Testimonials</span></h1>
                  <p>We Are A Full Service Digital Consultancy With Experience And Capacity To Meet The Needs Of Even The Largest Most Complex Of Organizations In The World.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-testi">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="txtwrp">
                  <h2 className="main-heading">OUR TESTIMONIAL</h2>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mainwrp wow fadeInDown">
                  <p className="">“I wanted to write a kid's story book and had so many ideas but couldn't really get it on paper. I reached out to The American Logo and discussed my ideas with them. They made a book and the storytelling was done in such an adorable way.”
                  </p>
                  <div className="namwrp">
                    <h4>Christopher Ray</h4>
                    <h6>San Francisco - United States</h6>
                    <span>
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="imawrp">
                    <span>CH</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mainwrp wow fadeInDown">
                  <p>“I consulted The American Logo for the ghostwriting of my partially written book. They agreed to it, and they did not just finish it but completed it in such a manner I could have never done. Now, I have got a bestseller with my name with the efforts of The American Logo.”
                  </p>
                  <div className="namwrp">
                    <h4>Oscar Jacob</h4>
                    <h6>Houston - United States</h6>
                    <span>
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="imawrp">
                    <span>MP</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mainwrp wow fadeInDown">
                  <p className="">“Four years ago, I decided to compile the long and eventful journey of my life and share the story in a book, but I could not achieve the goal because of no writing skills. That is when The American Logo came to my aid. They wrote the book for me that became the favorite of many. Five-star service!”
                  </p>
                  <div className="namwrp">
                    <h4>Rooney Robert</h4>
                    <h6>San Diego- United States</h6>
                    <span>
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="imawrp">
                    <span>SP</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="mainwrp wow fadeInDown">
                  <p className="">“I published my first book with The American Logo. Although in the beginning, I wasn't even sure about them after a few discussions with the team, I found them very professional and extremely polite. Highly satisfied!”
                  </p>
                  <div className="namwrp">
                    <h4>Jared Paula</h4>
                    <h6>North Carolina - United States</h6>
                    <span>
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                      <i className="fa fa-star" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="imawrp">
                    <span>CD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Cta />
      <BottomForm />    </>
  );
}
