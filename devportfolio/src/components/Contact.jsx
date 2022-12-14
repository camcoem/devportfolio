import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { emailSchema } from "../validations/EmailValidation";

export default function Contact() {
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();

    let formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      subject: e.target[2].value,
      text: e.target[3].value,
    };

    const isValid = await emailSchema.isValid(formData);
    console.log(isValid);

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
              <input type="text" name="user_name" className="contactInput" />
            </label>
            <label>
              Email
              <br />
              <input
                type="email"
                name="user_email"
                placeholder="your@email.com"
                className="contactInput"
              />
            </label>
            <label>
              Subject
              <br />
              <input
                type="text"
                name="subject"
                placeholder="Email subject"
                className="contactInput"
              />
            </label>
            <br />
            <textarea
              name="message"
              placeholder="Your message"
              cols={30}
              rows={10}
            />
            <button type="submit" className="sendBtn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
