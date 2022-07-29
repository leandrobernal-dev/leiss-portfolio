import emailjs from "@emailjs/browser";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_c4ljvse",
        "template_s4oy9gq",
        e.target,
        "btKyg8K3sRx1TB2ND"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <section id="contact" className="contact">
      <div className="contact-column">
        <h3 className="contact-head-text">CONTACT ME</h3>

        <div className="contact-content">
          {/*  */}
          <div className="contact-col-1">
            <h1>
              LET'S MAKE YOUR WEBSITE <span>SHINE.</span>
            </h1>
            <h3>
              Get the best offers without compromising quality.
              <br />
              Contact me now.
            </h3>
            <a
              href="https://www.fiverr.com/share/3axGAA"
              target="_blank"
              rel="noopener noreferrer"
              className="fiverr-link-btn"
            >
              Contact me on Fiverr
            </a>
            <h2>
              &ldquo;Let's <span>Grow</span> Together&rdquo; --&#62;
            </h2>
          </div>

          {/*  */}
          {/*  */}
          <form onSubmit={sendEmail}>
            <div className="your-name">
              <input
                placeholder="First Name"
                type="name"
                name="firstname"
              ></input>
              <input
                placeholder="Last Name"
                type="name"
                name="lastname"
              ></input>
            </div>
            <input
              className="email-input "
              placeholder="Your Email"
              type="email"
              name="email"
            ></input>

            <textarea
              className="message-input "
              name="message"
              placeholder="Your Message"
            ></textarea>
            <div className="submit-button-container">
              <button>SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
