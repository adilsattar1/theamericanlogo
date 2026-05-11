import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="logowrp">
                <Image src="/assets/images/logo.png" alt="The American Logo" width={180} height={54} />
                <p>We are a team of creative thinkers and problem solvers dedicated to helping brands achieve their goals.</p>
                <div className="footer-contact-info">
                  <p><i className="fa fa-phone" aria-hidden="true" /> <a href="tel:+1 (214) 531-3914">+1 (214) 531-3914</a></p>
                  <p><i className="fa fa-map-marker" aria-hidden="true" /> 535 W Airport Fwy, Irving, TX 75062</p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="navwrp">
                <h4>Features</h4>
                <ul>
                  <li><Link href="/2d-&-3d-illustration">2D &amp; 3D Illustration</Link></li>
                  <li><Link href="/logo-design">Logo Design</Link></li>
                  <li><Link href="/website-development">Website Development</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md">
              <div className="navwrp">
                <h4>Company</h4>
                <ul>
                  <li><Link href="/about-us">About Us</Link></li>
                  <li><Link href="/packages">Packages</Link></li>
                  <li><Link href="/contact-us">Contact Us</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="ftr-btm">
        <div className="container">
          <div className="row last-lin">
            <div className="col-md-6"><div className="txtwrp"><p>Copyright 2026 | The American Logo</p></div></div>
            <div className="col-md-6"><div className="txtwrp"><ul><li><Link href="/terms">Terms of Use</Link></li><li><Link href="/privacy-policy">Privacy Policy</Link></li></ul></div></div>
          </div>
        </div>
      </div>
    </>
  );
}
