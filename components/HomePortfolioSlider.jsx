"use client";

import { useEffect, useState } from "react";

const visibleCount = 3;
const sliderItems1 = [
  { src: "/assets/images/portfolios/7.png", alt: "Portfolio 7", href: "/assets/images/portfolios/7.png", imgClass: "widftttt" },
  { src: "/assets/images/portfolios/5.png", alt: "Portfolio 5", href: "/assets/images/portfolios/5.png", imgClass: "heigtttt" },
  { src: "/assets/images/portfolios/2.png", alt: "Portfolio 2", href: "/assets/images/portfolios/2.png", imgClass: "widftttt" },
  { src: "/assets/images/portfolios/3.png", alt: "Portfolio 3", href: "/assets/images/portfolios/3.png", imgClass: "heigtttt" },
  { src: "/assets/images/portfolios/4.png", alt: "Portfolio 4", href: "/assets/images/portfolios/4.png", imgClass: "widftttt" },
  { src: "/assets/images/portfolios/5.png", alt: "Portfolio 5", href: "/assets/images/portfolios/5.png", imgClass: "heigtttt" },
];
const sliderItems2 = [
  { src: "/assets/images/portfolios/1.png", alt: "Portfolio 1", href: "/assets/images/portfolios/1.png", imgClass: "widftttt" },
  { src: "/assets/images/portfolios/5.png", alt: "Portfolio 5", href: "/assets/images/portfolios/5.png", imgClass: "heigtttt" },
  { src: "/assets/images/portfolios/8.png", alt: "Portfolio 8", href: "/assets/images/portfolios/8.png", imgClass: "widftttt" },
  { src: "/assets/images/portfolios/3.png", alt: "Portfolio 3", href: "/assets/images/portfolios/3.png", imgClass: "heigtttt" },
  { src: "/assets/images/portfolios/4.png", alt: "Portfolio 4", href: "/assets/images/portfolios/4.png", imgClass: "widftttt" },
  { src: "/assets/images/portfolios/5.png", alt: "Portfolio 5", href: "/assets/images/portfolios/5.png", imgClass: "heigtttt" },
];

const wrapperStyle = {
  overflow: "hidden",
  width: "100%",
};
const listStyle = {
  display: "flex",
  padding: 0,
  margin: 0,
  listStyle: "none",
  gap: "20px",
  transition: "transform 0.8s ease",
};
const itemStyle = {
  flex: "0 0 calc(33.333% - 20px)",
  maxWidth: "calc(33.333% - 20px)",
  boxSizing: "border-box",
};
const imageStyle = {
  width: "100%",
  display: "block",
  borderRadius: "10px",
};

export default function HomePortfolioSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const maxIndex = Math.max(sliderItems1.length, sliderItems2.length) - visibleCount;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, 4000);
    return () => clearInterval(intervalId);
  }, [maxIndex]);

  const transform1 = `translateX(-${activeIndex * (100 / visibleCount)}%)`;
  const transform2 = `translateX(-${activeIndex * (100 / visibleCount)}%)`;

  return (
    <section className="portfoliowrp">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="txtwrp">
              <h4 className="upr-head">WEB DESIGN CONSULTANT</h4>
              <h2 className="main-heading">Solutions That Change The <span>World For The Better</span></h2>
              <p className="text-center main-pera">Design excellence can’t really be achieved without working side by side with extraordinary clients from around the world.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 p-0">
            <div className="img-portion" style={wrapperStyle}>
              <ul className="home-port-slider" style={{ ...listStyle, transform: transform1 }}>
                {sliderItems1.map((item, index) => (
                  <li key={`${item.href}-${index}`} style={itemStyle}>
                    <a data-fancybox="port" href={item.href}>
                      <figure>
                        <img className={item.imgClass} src={item.src} alt={item.alt} style={imageStyle} />
                      </figure>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="img-portion" style={wrapperStyle}>
              <ul dir="rtl" className="home-port-slider2" style={{ ...listStyle, transform: transform2 }}>
                {sliderItems2.map((item, index) => (
                  <li key={`${item.href}-${index}-2`} style={itemStyle}>
                    <a data-fancybox="port" href={item.href}>
                      <figure>
                        <img className={item.imgClass} src={item.src} alt={item.alt} style={imageStyle} />
                      </figure>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
