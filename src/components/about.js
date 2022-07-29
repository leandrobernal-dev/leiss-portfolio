import ScrollToElement from "./scrollToElement";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-column">
        {/*  */}
        <h3 className="about-me-head">ABOUT ME</h3>

        <div className="about-content">
          <div className="top-content">
            <div>
              <h1>
                I'm <span>Lian.</span>
              </h1>
              <p>
                Hi, this is Leandro Bernal. I am a freelance front-end developer
                and designer. I've been in the web development industry since
                2021. I have solid knowledge and experience in programming and
                web UI &#x26; UX designing.
                <br />
                <br />I use these tools to develop websites: HTML, CSS,
                JAVASCRIPT, React-js, jQuery, Tailwind-css, wordpress, Figma.
                Whether you have a small or medium sized business, I will help
                you move forward. Contact me and let's grow together.
              </p>
              <a
                onClick={ScrollToElement}
                href="#contact"
                className="contact-me-btn"
              >
                contact me
              </a>
            </div>
            <div>
              <i className="fa-solid fa-gears gears"></i>
            </div>
          </div>

          <div className="web-feat-container">
            <i className="fa-solid fa-compass-drafting compass"></i>

            <div className="web-development-content">
              <div className="web-development-head">
                <h2>Web Development</h2>
                <i className="fa-solid fa-circle-nodes"></i>
              </div>
              {/* <h4>Lorem ipsum dolor amet Lorem ipsum dolor sit amet</h4> */}
              <div className="web-development-feat">
                <h3>
                  Clean <span>Code</span>
                </h3>
                <h3>
                  Responsive <span>Website</span>
                </h3>
                <h3>
                  Secure <span>Website</span>
                </h3>
              </div>
            </div>

            <div className="web-design-content">
              <div className="web-design-head">
                <h2>Web design</h2>
                <i className="fa-solid fa-pen-nib"></i>
              </div>
              {/* <h4>Lorem ipsum dolor amet Lorem ipsum dolor sit amet</h4> */}
              <div className="web-design-feat">
                <h3>
                  Clean <span>Design</span>
                </h3>
                <h3>
                  Modern <span>Design</span>
                </h3>
                <h3>
                  Minimal <span>Design</span>
                </h3>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="skills">
            <h3> MY SKILLS</h3>
            <div className="skills-container">
              <div>
                <i className="fa-brands fa-js"></i>
                <p>javascript</p>
              </div>
              <div>
                <i className="fa-brands fa-react"></i>
                <p>react-js</p>
              </div>
              <div>
                <i className="fa-brands fa-figma"></i>
                <p>figma</p>
              </div>
              <div>
                <i className="fa-brands fa-wordpress"></i>
                <p>wordpress</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
