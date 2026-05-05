"use client";

import { useEffect, useState } from "react";

const testimonials = [
  {
    text: "Wet happy with my design. Exactly what I wanted and my ideas where completely matched! So happy with the end result.",
    name: "Katie Baker",
    title: "Equine Massage Therapy",
  },
  {
    text: "Great service. loved my logo design. Nick Waston My Project manager has been very helpful and efficient throughout the whole process.",
    name: "Rohan Singh Sharma",
    title: "MR. Travel Tool",
  },
  {
    text: "We started with a small project, which went very well. Then, a slightly bigger project. We've now beenworking together for the past two years on all of my big projects.",
    name: "Natalie Hernandez",
    title: "CEO @Benjaminsort",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  const nextSlide = () => setActiveIndex((current) => (current + 1) % testimonials.length);

  return (
    <section className="testimnl">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 offset-md-1 my-auto">
            <div className="txt-wrp">
              <h2 className="main-heading">Hear What Our <span>Customers Have to Say!</span></h2>
              <p className="main-pera">No Design Company In The World Can Thrive Without Client Satisfaction – This Is Why We Keep That Our Number One Priority. We Are Where We Are Today, Because Of Hundreds Of Satisfied Customers.</p>
            </div>
            <div className="btnsliderwrp">
              <button type="button" className="prevanchor" aria-label="Previous testimonial" onClick={prevSlide}>
                <i className="fa fa-long-arrow-left" aria-hidden="true" />
              </button>
              <button type="button" className="nextanchor" aria-label="Next testimonial" onClick={nextSlide}>
                <i className="fa fa-long-arrow-right" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="col-md-7">
            <div className="abstl">
              <div className="sldrtstmnl">
                {testimonials.map((item, index) => (
                  <div key={item.name} className={index === activeIndex ? "testim-wrp active" : "testim-wrp"} style={{ display: index === activeIndex ? "block" : "none" }}>
                    <img src="/assets/images/quote.png" alt="quote" />
                    <h4>{item.text}</h4>
                    <div className="desgnt-sec">
                      <b>{item.name}</b>
                      <h6>{item.title}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
