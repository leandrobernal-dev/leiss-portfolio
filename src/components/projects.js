import bookeepingProject from "../assets/images/bookeeping 1.png";
import webPortfolio from "../assets/images/web-portfolio-project 2.png";
import paperFlip from "../assets/images/paper-flip-projects.png";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects-column">
        <h3 className="projects-head-text">MY PROJECTS</h3>

        <h1 className="projects-head-text2">
          RECENT <span>PROJECTS.</span>
        </h1>

        <div className="projects-container">
          {/*  */}
          {/*  */}
          <div className="bookeeping-project">
            <div className="project-description">
              <div>
                <h2>Web Development Portfolio</h2>
                <br />
                <h4>
                  My personal Web development and web design services portfolio.
                </h4>
                <p>
                  Built using: html5, css3, javascript es6, react-js, j-query
                </p>
              </div>
            </div>
            <div className="project-image">
              <img src={webPortfolio} />
            </div>
          </div>

          {/*  */}
          {/*  */}
          <div className="bookeeping-project">
            <div className="project-description">
              <div>
                <h2>Bookeeping Services Portfolio</h2>
                <br />
                <h4>A bookeeping services company website portfolio.</h4>
                <p>
                  Built using: html5, css3 || tailwind-css, javascript es6,
                  react-js, j-query
                </p>
              </div>
            </div>
            <div className="project-image">
              <img src={bookeepingProject} />
            </div>
          </div>

          {/*  */}
          {/*  */}
          <div className="bookeeping-project">
            <div className="project-description">
              <div>
                <h2>Paper-flip</h2>
                <br />
                <h4>My meme and inspirational images generator.</h4>
                <p>
                  Built using: html5, css3 || sass, javascript es6, react-js,
                  j-query
                </p>
                <p>Api: pexels-api, img-flip api</p>
              </div>
            </div>
            <div className="project-image">
              <img src={paperFlip} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
