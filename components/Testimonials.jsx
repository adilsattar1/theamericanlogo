export default function Testimonials() {
  return (
    <>
      <section className="testimnl">       
        <div className="container-fluid">  
          <div className="row">
            <div className="col-md-4 offset-md-1 my-auto">
              <div className="txt-wrp">
                <h2 className="main-heading">Hear What Our <span>Customers Have to Say!</span></h2>
                {/*<h4 class=" soer" data-wow-duration="2s" data-wow-delay="1s" > <b> </b></h4>*/}
                <p className="main-pera">No Design Company In The World Can Thrive Without Client Satisfaction – This Is Why We Keep That Our Number One Priority. We Are Where We Are Today, Because Of Hundreds Of Satisfied Customers.</p>        
              </div>
              <div className="btnsliderwrp">
                <button type="button" className="prevanchor" aria-label="Previous testimonial">
                  <i className="fa fa-long-arrow-left" aria-hidden="true" />
                </button>
                <button type="button" className="nextanchor" aria-label="Next testimonial">
                  <i className="fa fa-long-arrow-right" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="col-md-7">
              <div className="abstl">
                <div className="sldrtstmnl">
                  <div>
                    <div className="testim-wrp">
                      <img src="/assets/images/quote.png" />
                      <h4 className="">Wet happy with my design. Exactly what I wanted and my ideas where completely matched! So happy with the end result.</h4>
                      <div className="desgnt-sec">
                        <b>Katie Baker</b>
                        <h6>Equine Massage Therapy</h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testim-wrp">
                      <img src="/assets/images/quote.png" />
                      <h4 className="">Great service. loved my logo design. Nick Waston My Project manager has been very helpful and efficient throughout the whole process.</h4>  
                      <div className="desgnt-sec">
                        <b>Rohan Singh Sharma</b>
                        <h6>MR. Travel Tool</h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="testim-wrp">
                      <img src="/assets/images/quote.png" />
                      <h4 className="">We started with a small project, which went very well. Then, a slightly bigger project. We've now beenworking together for the past two years on all of my big projects.</h4>                  
                      <div className="desgnt-sec">
                        <b>Natalie Hernandez</b>
                        <h6>CEO @Benjaminsort</h6>
                      </div>
                    </div>
                  </div>             
                </div>            
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
