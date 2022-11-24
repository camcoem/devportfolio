import React from "react";

export default function Contact() {
  return (
    <section>
      <h2 className="contact-me"> Contact me</h2>
      <div className="container-contact">
        <form>
          <label>
            Name
            <input type="text" name="user_name" />
          </label>
          <label>
            Email
            <input
              type="email"
              name="user_email"
              placeholder="your@email.com"
            />
          </label>
          <label>
            Subject
            <input type="text" name="subject" placeholder="Email subject" />
          </label>
          <textarea
            name="message"
            placeholder="Your message"
            cols={30}
            rows={10}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
