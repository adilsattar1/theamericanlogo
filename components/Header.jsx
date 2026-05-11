import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { href: "/2d-&-3d-illustration", label: "2D & 3D Illustration" },
  { href: "/logo-design", label: "Logo Design" },
  { href: "/website-development", label: "Website Development" },
  { href: "/motion-graphics", label: "Motion Graphics" },
  { href: "/search-engine-optimization", label: "Search Engine Optimization" },
  { href: "/social-media-marketing", label: "Social Media Marketing" },
];

export default function Header() {
  return (
    <>
      <div className="mobile-nav">
        <Link href="/" className="logo-main">
          <Image
            src="/assets/images/logo.png"
            alt="The American Logo"
            width={130}
            height={150}
            style={{ width: "130px", height: "150px" }}
          />
        </Link>
      </div>
      <header className="header-main">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="logowrp">
                <Link href="/">
                  <Image
                    src="/assets/images/logo.png"
                    alt="The American Logo"
                    width={130}
                    height={150}
                    style={{ width: "130px", height: "150px" }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-md-7 my-auto">
              <div className="navwrp">
                <ul>
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about-us">About Us</Link></li>
                  <li>
                    <div className="dropdown">
                      <button className="dropbtn" type="button">Service&nbsp;&nbsp;<i className="fa fa-solid fa-chevron-down" /></button>
                      <div className="dropdown-content">
                        {serviceLinks.map((item) => (
                          <Link href={item.href} key={item.href}>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </li>
                  <li><Link href="/packages">Packages</Link></li>
                  <li><Link href="/portfolio">Portfolios</Link></li>
                  <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 my-auto">
              <div className="btnwrp">
                <ul>
                  <li><Link href="/get-started" className="btn-main">Let's Get Started</Link></li>
                  <li><a href="tel:+1 (214) 531-3914"><i style={{ color: "#f07c69" }} className="fa fa-phone" aria-hidden="true" /> +1 (214) 531-3914</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}


