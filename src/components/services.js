import ScrollToElement from "./scrollToElement";

export default function Services() {
  const services = [
    {
      name: "PORTFOLIO WEBSITE",
      offers: [
        "Design Customization",
        "Content upload",
        "Responsive website",
        "Include source code",
        "Unlimited Revisions",
      ],
      fiverrLink: "https://www.fiverr.com/share/06Zr7k",
    },
    {
      name: "PORTFOLIO DESIGN",
      offers: [
        "Design Customization",
        "Desktop and Mobile",
        "Responsive website",
        "Include source file",
        "Unlimited Revisions",
      ],
      fiverrLink: "https://www.fiverr.com/share/Z23NEl",
    },
    {
      name: "BLOG WEBSITE",
      offers: [
        "Design Customization",
        "Content upload",
        "Responsive website",
        "Include source code",
        "Unlimited Revisions",
      ],
      fiverrLink: "https://www.fiverr.com/share/BWzKBk",
    },
    {
      name: "BLOG DESIGN",
      offers: [
        "Design Customization",
        "Desktop and Mobile",
        "Responsive website",
        "Include source file",
        "Unlimited Revisions",
      ],
      fiverrLink: "https://www.fiverr.com/share/pBmydp",
    },
  ];
  const servicesElements = services.map((service) => {
    return (
      <div className="services-services">
        <h2>{service.name}</h2>
        <div className="offers">
          {service.offers.map((offer) => {
            return <h4> &#x2713;{offer}</h4>;
          })}
        </div>
        <div className="services-buttons">
          <a onClick={ScrollToElement} href="#contact">
            GET IT NOW
          </a>
          <a
            href={service.fiverrLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            GET IT ON FIVERR
          </a>
        </div>
      </div>
    );
  });
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
            <div className="services-container">{servicesElements}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
