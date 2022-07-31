import ScrollToElement from "./scrollToElement";
import $ from "jquery";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    const animatingText = $(".name-text")[0];
    const aboutBtn = $(".about-me-btn")[0];
    animatingText.addEventListener("animationend", () => {
      aboutBtn.classList.add("about-btn-to-right");
    });
  }, []);
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
                Front-end Developer <span>|</span> Web UI designer
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
