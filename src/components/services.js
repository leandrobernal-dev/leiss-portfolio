import ScrollToElement from "./scrollToElement";

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-background"></div>
      <div className="services-column">
        <h3 className="services-head-text">MY SERVICES</h3>

        <div className="services-content">
          {/*  */}
          <div className="services-head">
            <h1>
              What I <span>Do.</span>
            </h1>
            <p>
              I offer 100% customized fully built responsive website. Check out
              some of my services
            </p>

            <button>
              <a
                className="get-it-btn"
                onClick={ScrollToElement}
                href="#contact"
              >
                GET IT NOW
              </a>
            </button>
          </div>

          {/*  */}
          <div className="services-container-parent">
            <div className="services-container">
              <div className="services-services">
                <h2>PORTFOLIO WEBSITE</h2>
                <div className="offers">
                  <h4> &#x2713;Design Customization</h4>
                  <h4> &#x2713;Content upload</h4>
                  <h4> &#x2713;Responsive design</h4>
                  <h4> &#x2713;Include source code</h4>
                  <h4> &#x2713;Unlimited Revisions</h4>
                </div>
                <div className="services-buttons">
                  <a onClick={ScrollToElement} href="#contact">
                    GET IT NOW
                  </a>
                  <a
                    href="https://www.fiverr.com/share/3axGAA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GET IT ON FIVERR
                  </a>
                </div>
              </div>
              <div className="services-services">
                <h2>PORTFOLIO DESIGN</h2>
                <div className="offers">
                  <h4> &#x2713;Design Customization</h4>
                  <h4> &#x2713;Desktop &#x26; Mobile</h4>
                  <h4> &#x2713;Include source file</h4>
                  <h4> &#x2713;Unlimited Revisions</h4>
                </div>
                <div className="services-buttons">
                  <a onClick={ScrollToElement} href="#contact">
                    GET IT NOW
                  </a>
                  <a
                    href="https://www.fiverr.com/share/3axGAA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GET IT ON FIVERR
                  </a>
                </div>
              </div>
              <div className="services-services">
                <h2>BLOG WEBSITE</h2>
                <div className="offers">
                  <h4> &#x2713;Design Customization</h4>
                  <h4> &#x2713;Content upload</h4>
                  <h4> &#x2713;Responsive design</h4>
                  <h4> &#x2713;Include source code</h4>
                  <h4> &#x2713;Unlimited Revisions</h4>
                </div>
                <div className="services-buttons">
                  <a onClick={ScrollToElement} href="#contact">
                    GET IT NOW
                  </a>
                  <a
                    href="https://www.fiverr.com/share/3axGAA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GET IT ON FIVERR
                  </a>
                </div>
              </div>{" "}
              <div className="services-services">
                <h2>BLOG DESIGN</h2>
                <div className="offers">
                  <h4> &#x2713;Design Customization</h4>
                  <h4> &#x2713;Desktop &#x26; Mobile</h4>
                  <h4> &#x2713;Include source file</h4>
                  <h4> &#x2713;Unlimited Revisions</h4>
                </div>
                <div className="services-buttons">
                  <a onClick={ScrollToElement} href="#contact">
                    GET IT NOW
                  </a>
                  <a
                    href="https://www.fiverr.com/share/3axGAA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GET IT ON FIVERR
                  </a>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
