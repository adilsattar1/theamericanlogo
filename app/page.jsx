import Link from "next/link";
import ClientLogos from "../components/ClientLogos";
import HomePortfolioSlider from "../components/HomePortfolioSlider";
import PackageInclude from "../components/PackageInclude";
import Cta from "../components/Cta";
import Testimonials from "../components/Testimonials";
import BottomForm from "../components/BottomForm";

export const metadata = {
  title: "Home Page",
  description: "The American Logo",
};

const featureCards = [
  {
    title: "2d & 3D Illustration",
    description: "The American Logo's exceptional 2D and 3D illustrations redefine the art of visual storytelling. We combine technical precision with artistic innovation to create stunning visuals that are tailored to your brand. Our unique illustrations add depth, creativity, and visual impact to your digital footprint. Whether it's for advertising, branding, or digital content, our illustrations always leave a lasting impact on your audience.",
    href: "/2d-&-3d-illustration",
    imgSrc: "/assets/images/01.png",
    imgAlt: "2d and 3d illustration",
    svg1: { style: "drop-shadow(4px 5px 4px rgba(255,167,5,0.3))", fill: "#E8606C" },
    svg2: { style: "drop-shadow(4px 5px 4px rgba(255,86,0,0.3))", fill: "#F28369" },
  },
  {
    title: "Website Development",
    description: "The American Logo's skilled development team employs cutting-edge technologies to create websites that not only look great but also provide a seamless user experience. We go above and beyond standard templates, customising each website to reflect the uniqueness of your brand. Our websites stand out in the digital landscape thanks to a focus on responsive design, intuitive navigation, and optimised performance.",
    href: "/website-development",
    imgSrc: "/assets/images/02.png",
    imgAlt: "website development",
    svg1: { style: "drop-shadow(4px 5px 4px rgba(65,193,123,0.3))", fill: "#F28369" },
    svg2: { style: "drop-shadow(4px 5px 4px rgba(0,153,69,0.3))", fill: "#E8606C" },
  },
  {
    title: "Logo Design",
    description: "At The American Logo, we understand that a logo is the visual emblem of your company's identity. Our distinct approach entails a meticulous process of understanding your brand's story, values, and target audience. We then translate these insights into visually appealing logos that leave a definitive impression. We believe in the power of simplicity and timeless design to ensure that your logo is timeless.",
    href: "/logo-design",
    imgSrc: "/assets/images/03.png",
    imgAlt: "logo design",
    svg1: { style: "drop-shadow(4px 5px 4px rgba(86,189,253,0.3))", fill: "#F28369" },
    svg2: { style: "drop-shadow(4px 5px 4px rgba(58,68,237,0.3))", fill: "#E8606C" },
  },
];

const serviceCards = [
  {
    title: "Motion Graphics",
    description: "From contemporary graphics to dynamic social media content, our team of talented animators and designers harnesses the latest techniques to deliver visually stunning and memorable motion graphics. We combine the power of animation, design, and creativity to bring your ideas to life with captivating motion. The American Logo's exceptional motion graphics will capture your audience and help you stand out from the competition.",
    href: "/motion-graphics",
    imgSrc: "/assets/images/04.png",
    imgAlt: "motion graphics",
    iconWrapperModifier: "",
    svg1: { style: "drop-shadow(4px 5px 4px rgba(255,167,5,0.3))", fill: "#E8606C" },
    svg2: { style: "drop-shadow(4px 5px 4px rgba(255,86,0,0.3))", fill: "#F28369" },
  },
  {
    title: "SEO",
    description: "SEO service is not just about rankings and traffic. We strive to deliver measurable business outcomes. Through thorough analysis and optimization, we aim to enhance user experience, increase conversions, and ultimately help your brand achieve its goals. Our commitment to staying ahead of the ever-evolving search engine algorithms sets us apart from the competition. Experience our unique SEO solutions in driving sustainable growth and establishing your brand as a leader in the digital realm.",
    href: "/search-engine-optimization",
    imgSrc: "/assets/images/05.png",
    imgAlt: "SEO",
    iconWrapperModifier: "sm",
    svg1: { style: "drop-shadow(4px 5px 4px rgba(86,189,253,0.3))", fill: "#F28369" },
    svg2: { style: "drop-shadow(4px 5px 4px rgba(58,68,237,0.3))", fill: "#E8606C" },
  },
  {
    title: "Social Media Marketing",
    description: "Our social media marketing (SMM) service is the key to unlocking your brand's online potential. Our team of experts will identify the right platforms, target the most relevant audience, and create engaging content that resonates with your followers. Our goal is to actively manage your social media presence, fostering genuine connections with your audience through meaningful interactions and timely responses. Through captivating visuals, compelling storytelling, and interactive experiences, we will help your brand stand out in the crowded social media landscape.",
    href: "/social-media-marketing",
    imgSrc: "/assets/images/06.png",
    imgAlt: "social media marketing",
    iconWrapperModifier: "",
    svg1: { style: "drop-shadow(4px 5px 4px rgba(86,189,253,0.3))", fill: "#F28369" },
    svg2: { style: "drop-shadow(4px 5px 4px rgba(58,68,237,0.3))", fill: "#E8606C" },
  },
];

export default function Page() {
  return (
    <>      <section className="home-bannerwrp">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="txtwrp">
                <div className="imgtop">
                  <img src="/assets/images/us-flag.png" />
                  <span>#Top Logo Design Services In US</span>
                </div>
              </div>
              <div className="txtwrp">
                <h1>100% Original<br /><span>&amp; Creative Logo Designs</span></h1>
                <p>At The American Logo, our team specializes in developing custom strategies, including
                  distinctive logo design, to establish and grow your brand</p>
              </div>
              <div className="btnwrp">
                <Link href="/get-started" className="btn-1">Let's Get Started</Link>
                <a className="btn-2" href="tel:+1 (214) 531-3914"> <i className="fa fa-phone" aria-hidden="true" />+1
                  (682) 345-9960</a>
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
              <div className="col-md-6">
                <div className="imgwrp">
                  <img src="/assets/images/91e3d6d67033a0529497659f43280313.png" />
                </div>
              </div>
              <div className="col-md-6 my-auto">
                <div className="txtwrp">
                  <h4 className="upr-head">LOGO DESIGN CONSULTANT</h4>
                  <h2 className="main-heading">Professional Logo <span>Designing Services &amp; Solutions</span></h2>
                  <p className="main-pera">We help corporates transforming their businesses in to a trusted brands,
                    cherished by their customers and make them help to become ultimate choice for their clients.
                    We put in lots of efforts to understand our clients' requirements and fully analyze the
                    values of their business.</p>
                </div>
                <div className="btnwrp">
                  <Link href="/get-started" className="btn-1">Let's Get Started</Link>
                  <a className="btn-2" href="tel:+1 (214) 531-3914"> <i className="fa fa-phone" aria-hidden="true" />+1
                    (682) 345-9960</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="box-section alter-bg srv-sec animate">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="heading-sep">
                  <span className="seperator" />
                </div>
                <h4 className="upr-head text-center">SERVICES WE PROVIDE</h4>
                <h2 className="main-heading text-center">Our range of services beyond our core service to add <span>
                    <br />value to our customer experience </span></h2>
                <p className="text-center main-pera">At Web Designs Prime, our core website design and development
                  service is accompanied by a range of other value-added services that add the oomph factor and
                  makes it thrive. These services can be availed separately or in combination with other services
                  to attain tangible benefits for your business.</p>
              </div>
            </div>
            <div className="row">
              {featureCards.map((card) => (
                <div className="col-sm-4 animate bounceIn" data-wow-delay="0.5s" key={card.title}>
                  <div className="bx">
                    <div className="icon-wrapper">
                      <div className="circle">
                        <svg style={{ filter: card.svg1.style, fill: card.svg1.fill }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.4 197.4">
                          <path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6,3.2-12.4,3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z" />
                        </svg>
                      </div>
                      <div className="circle">
                        <svg style={{ filter: card.svg2.style, fill: card.svg2.fill }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.4 197.4">
                          <path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6,3.2-12.4,3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z" />
                        </svg>
                      </div>
                      <figure>
                        <img src={card.imgSrc} alt={card.imgAlt} />
                      </figure>
                    </div>
                    <h4>{card.title}</h4>
                    <p className="list-scroll">{card.description}</p>
                    <Link href={card.href}>DISCOVER More</Link>
                  </div>
                </div>
              ))}
              <div className="col-sm-4 animate bounceIn" data-wow-delay="0.5s">
                <div className="bx">
                  <div className="icon-wrapper">
                    <div className="circle">
                      <svg style={{filter: 'drop-shadow(4px 5px 4px rgba(255,167,5,0.3))', fill: '#E8606C'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.4 197.4">
                        <path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z">
                        </path>
                      </svg>
                    </div>
                    <div className="circle">
                      <svg style={{filter: 'drop-shadow(4px 5px 4px rgba(255,86,0,0.3))', fill: '#F28369'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.4 197.4">
                        <path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6-3.2-12.4-3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z">
                        </path>
                      </svg>
                    </div>
                    <figure>
                      <img src="/assets/images/04.png" alt="motion-graphics" />
                    </figure>
                  </div>
                  <h4>Motion Graphics</h4>
                  <p className="list-scroll">From contemporary graphics to dynamic social media content, our team of
                    talented animators and designers harnesses the latest techniques to deliver visually
                    stunning and memorable motion graphics. We combine the power of animation, design, and
                    creativity to bring your ideas to life with captivating motion. The American Logo's
                    exceptional motion graphics will capture your audience and help you stand out from the
                    competition.</p>
                  <Link href="/motion-graphics">DISCOVER More</Link>
                </div>
              </div>
              {serviceCards.map((card) => (
                <div className="col-sm-4 animate bounceIn" data-wow-delay="0.5s" key={card.title}>
                  <div className="bx">
                    <div className={`icon-wrapper${card.iconWrapperModifier ? ` ${card.iconWrapperModifier}` : ""}`}>
                      <div className="circle">
                        <svg style={{ filter: card.svg1.style, fill: card.svg1.fill }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.4 197.4">
                          <path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6,3.2-12.4,3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z" />
                        </svg>
                      </div>
                      <div className="circle">
                        <svg style={{ filter: card.svg2.style, fill: card.svg2.fill }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 177.4 197.4">
                          <path d="M0,58.4v79.9c0,6.5,3.5,12.6,9.2,15.8l70.5,40.2c5.6,3.2,12.4,3.2,18,0l70.5-40.2c5.7-3.2,9.2-9.3,9.2-15.8V58.4 c0-6.5-3.5-12.6-9.2-15.8L97.7,2.4c-5.6,3.2-12.4,3.2-18,0L9.2,42.5C3.5,45.8,0,51.8,0,58.4z" />
                        </svg>
                      </div>
                      <figure>
                        <img src={card.imgSrc} alt={card.imgAlt} />
                      </figure>
                    </div>
                    <h4>{card.title}</h4>
                    <p className="list-scroll">{card.description}</p>
                    <Link href={card.href}>DISCOVER More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <HomePortfolioSlider />
      </div>
      
      <PackageInclude />
      {/*<section class="comboopack">*/}
      {/*    <div class="container-custom">*/}
      {/*        <div class="row">*/}
      {/*            <div class="col-lg-12">*/}
      {/*                <div class="combopackwrap">*/}
      {/*                    <div class="headdd">*/}
      {/*                        <figure>*/}
      {/*                            <img src="/assets/images/best-seller.png" width="170" height="183">*/}
      {/*                        </figure>*/}
      {/*                        <h3>STARTUP COMBO PACKAGE</h3>*/}
      {/*                    </div>*/}
      {/*                    <div class="bodyyy">*/}
      {/*                        <div class="col-md-12">*/}
      {/*                            <div class="topheadtxt">*/}
      {/*                                <p class="main-pera">Suitable for potential super-startups and brand revamps for*/}
      {/*                                    companies</p>*/}
      {/*                            </div>*/}
      {/*                        </div>*/}
      {/*                        <div class="coll">*/}
      {/*                            <ul>*/}
      {/*                                <li class="heading">CUSTOM WEBSITE DESIGN</li>*/}
      {/*                                <li>15 to 20 Pages Website</li>*/}
      {/*                                <li>Custom Made, Interactive, Dynamic & High End Design</li>*/}
      {/*                                <li>Custom WP (or) Custom PHP Development</li>*/}
      {/*                                <li>1 jQuery Slider Banner</li>*/}
      {/*                                <li>Up to 10 Custom Made Banner Designs</li>*/}
      {/*                                <li>10 Stock Images</li>*/}
      {/*                                <li>Unlimited Revisions</li>*/}
      {/*                                <li>Complete W3C Certified HTML</li>*/}
      {/*                                <li>Complete Deployment</li>*/}
      {/*                            </ul>*/}
      {/*                        </div>*/}
      {/*                        <div class="coll">*/}
      {/*                            <ul>*/}
      {/*                                <li>Business Analysis</li>*/}
      {/*                                <li>Consumer Analysis </li>*/}
      {/*                                <li>Competitor Analysis </li>*/}
      {/*                                <li>35 Selected Keywords Targeting </li>*/}
      {/*                                <li>15 Pages Keyword Targeted</li>*/}
      {/*                            </ul>*/}
      {/*                        </div>*/}
      {/*                        <div class="coll text-right magrr">*/}
      {/*                            <div class="pricingwrpr">*/}
      {/*                                <h4>$999. <span>99</span></h4>*/}
      {/*                            </div>*/}
      {/*                            <div class="package-off"> <span>Was $179.99</span> </div>*/}
      {/*                            <div class="detailwrp">*/}
      {/*                                <a href="tel:+1 (214) 531-3914"><span>Call Us At</span> +1 (682) 345-9960</a>*/}
      {/*                                <a class="btn-1" href="/get-started">Get Started</a>*/}
      {/*                            </div>*/}
      {/*                        </div>*/}
      {/*                    </div>*/}
      {/*                </div>*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</section>*/}
      <section className="simplesectionwrp">
        <div className="container">
          <div className="row">
            <div className="col-md-6 my-auto">
              <div className="txtwrp">
                <h4 className="upr-head">WEB DESIGN CONSULTANT</h4>
                <h2 className="main-heading">Let us help you in creating <br /> <span> your online presence</span>
                </h2>
                <p className="main-pera">Our team of web experts will help you with your goal of developing a
                  website and will give you all the technical advice in making it engaging and relevant for
                  your business.</p>
                {/* <ul>
      						<li>Cutting-edge technologies for exceptional digital solutions</li>
      						<li>Empowering entrepreneurs, startups, and businesses with tech-driven innovation</li>
      						<li>Transformative designs for immersive digital experiences</li>
      						<li>Accelerating business growth through digital solutions</li>
      						<li>Amplifying digital presence with The American Logo's expertise</li>
      					</ul> */}
              </div>
            </div>
            <div className="col-md-6">
              <div className="imgwrp">
                <img src="/assets/images/9a8c605f73b8562966400b97a3024705.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Cta />
      <Testimonials />
      <section className="roleswrp">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="accordion">
                <div className="quest-section"> <a className="quest-title " href="#accordion-1">What do you mean by
                    white label partnership?</a>
                  <div id="accordion-1" className="quest-content">
                    <div className="row bodrbtm">
                      <div className="col-md-12">
                        <h4>The phrase "white label" has become a buzzword in digital marketing.
                          Essentially, an agency has a partner who works under their brand name for
                          them and their clients. For example, Tapgency Inc provides SEO services to
                          our agency partners, who can present them to their clients as their own.
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="quest-section"> <a className="quest-title" href="#accordion-2">Would my business benefit
                    from digital marketing?</a>
                  <div id="accordion-2" className="quest-content">
                    <div className="row bodrbtm">
                      <div className="col-md-12">
                        <h4>Digital marketing is the present and future of marketing. In this digital
                          era, brands have more audiences digitally than traditionally. Moreover, we
                          make sure to design a custom digital marketing plan according to the needs
                          of your business and the niche of your audience. It helps in bringing leads,
                          eventually increasing the ROI. </h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion">
                  <div className="quest-section"> <a className="quest-title " href="#accordion-3">Can you build apps
                      for both iOS and Android?</a>
                    <div id="accordion-3" className="quest-content">
                      <div className="row bodrbtm">
                        <div className="col-md-12">
                          <h4>Yes, we have individuals experienced in both iOS and Android mobile app
                            development. We can offer you the best app development solutions for
                            both operating systems.</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="quest-section"> <a className="quest-title" href="#accordion-4">What does it cost to
                      develop a web app?</a>
                    <div id="accordion-4" className="quest-content">
                      <div className="row bodrbtm">
                        <div className="col-md-12">
                          <h4>The cost of developing a web application depends on various factors,
                            including its complexity and functionality. The more basic an
                            application, the less expensive it is to build the product. A simple
                            website takes less time and money to create, but this is not true for a
                            more complex one.</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion">
                    <div className="quest-section"> <a className="quest-title " href="#accordion-5">Do you have NFT
                        designers and developers?</a>
                      <div id="accordion-5" className="quest-content">
                        <div className="row bodrbtm">
                          <div className="col-md-12">
                            <h4>Yes, we do. We have been working in the NFT industry for the past
                              nine years as we started as soon as it gained popularity. Our team
                              consists of professional NFT designers and developers with sound
                              market knowledge. </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="quest-section"> <a className="quest-title" href="#accordion-6">Will development
                        include the creation of prototypes and demo versions that I can try out?</a>
                      <div id="accordion-6" className="quest-content">
                        <div className="row bodrbtm">
                          <div className="col-md-12">
                            <h4>We wouldn't exactly call it a demo version, but using Agile
                              Methodology helps us to create operational software as soon as
                              possible and then simply add the additional features along the way.
                              As a result, you'll be able to examine and test your software much
                              sooner. We call this a ‘prototype’.</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <BottomForm />    </>
  );
}

