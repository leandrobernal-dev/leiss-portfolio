import logo from "../assets/images/logo+text.svg";
import ScrollToElement from "./scrollToElement";

export default function Home() {
  return (
    <section id="home" className="home">
      <div className="hero">
        <div className="hero"></div>
      </div>

      <div className="home-column">
        <div className="texts">
          <p>Hi there,</p>
          <div className="name-logo">
            <div>
              <h2 className="name-text">
                I am <span>Lian</span>
              </h2>
              <h3 className="job-text">
                Web developer <span>|</span> Web designer
              </h3>
            </div>
            <div className="home-logo-parent">
              {/* <img className="home-logo" src={logo} /> */}
            </div>
          </div>
        </div>
        <div className="about-me-button-container">
          <a onClick={ScrollToElement} href="#about" className="about-me-btn">
            about me
          </a>
        </div>
      </div>
    </section>
  );
}
