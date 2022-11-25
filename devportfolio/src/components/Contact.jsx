import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dhcmd7d",
        "template_0s3hp3f",
        form.current,
        "loYpwWE1nbFt2ZmGe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div>
        <h2 className="contactMe"> Contact me</h2>
        <div className="contactMeContainer">
          <form ref={form} onSubmit={sendEmail} className="containerContact">
            <label>
              Name
              <br />
              <input type="text" name="user_name" />
            </label>
            <label>
              Email
              <br />
              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
              />
            </label>
            <label>
              Subject
              <br />
              <input type="text" name="subject" placeholder="Email subject" />
            </label>
            <br />
            <textarea
              name="message"
              placeholder="Your message"
              cols={30}
              rows={10}
            />
            <button type="submit">Send Message</button>
          </form>
        </div>
        <div className="footer">
          <a href="https://github.com/camcoem">
            <i className="devicon-github-original" id="iconFooter"></i>
          </a>
          <a href="https://www.linkedin.com/in/camila-coello-merino/">
            <i className="devicon-linkedin-plain" id="iconFooter"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
