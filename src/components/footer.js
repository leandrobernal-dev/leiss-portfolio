import logo from "../assets/images/footer-logo.svg";
import ScrollToElement from "./scrollToElement";

export default function Footer() {
  return (
    <footer>
      <div className="footer-column">
        <div className="footer-content">
          <img src={logo} />
          <div className="footer-nav">
            <h3>EXPLORE</h3>
            <ul>
              <li>
                <a onClick={ScrollToElement} href="#home">
                  home
                </a>
              </li>
              <li>
                <a onClick={ScrollToElement} href="#about">
                  about me
                </a>
              </li>
              <li>
                <a onClick={ScrollToElement} href="#services">
                  my services
                </a>
              </li>
              <li>
                <a onClick={ScrollToElement} href="#projects">
                  projects
                </a>
              </li>
              <li>
                <a onClick={ScrollToElement} href="#contact">
                  contact me
                </a>
              </li>
            </ul>
          </div>
          <div className="freelancing-links">
            <h3>VISIT</h3>
            <ul>
              <li>
                <a
                  href="https://www.fiverr.com/share/3axGAA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fiverr
                </a>
              </li>
              {/* <li>
                <a>upwork</a>
              </li> */}
            </ul>
          </div>
        </div>
        <p className="copywrite">©2022.LEISS.COM. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
}
