import emailjs from "@emailjs/browser";
import $ from "jquery";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    const firstname = $(".firstname")[0];
    const lastname = $(".lastname")[0];
    const email = $(".email")[0];
    const message = $(".message")[0];

    if (firstname.value < 1) {
      firstname.classList.add("error");
      return;
    } else {
      firstname.classList.remove("error");
    }
    if (lastname.value < 1) {
      lastname.classList.add("error");
      return;
    } else {
      lastname.classList.remove("error");
    }
    if (email.value < 5) {
      email.classList.add("error");
      return;
    } else {
      email.classList.remove("error");
    }
    if (message.value < 1) {
      message.classList.add("error");
      return;
    } else {
      message.classList.remove("error");
    }

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
                className="firstname"
              ></input>
              <input
                placeholder="Last Name"
                type="name"
                name="lastname"
                className="lastname"
              ></input>
            </div>
            <input
              className="email-input email"
              placeholder="Your Email"
              type="email"
              name="email"
            ></input>

            <textarea
              className="message-input message"
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
