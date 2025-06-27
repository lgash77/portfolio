import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // 1. Send Contact Us email (to you)
    emailjs.sendForm(
      'service_2jp1wbv',
      'template_h18m2eo',
      form.current,
      'zugn_amtYYbRVPCJs'
    ).then(() => {
      // 2. After success, send Auto-Reply email (to user)
      emailjs.sendForm(
        'service_2jp1wbv',
        'template_ktegbdf',
        form.current,
        'zugn_amtYYbRVPCJs'
      ).then(() => {
        alert("Form sent successfully!");
        form.current.reset();
      }).catch((err) => {
        console.error("Auto-reply failed:", err.text);
        alert("Message sent but auto-reply failed.");
      });
    }).catch((error) => {
      console.error("Failed to send message:", error.text);
      alert("Oops, something went wrong. Please try again.");
    });
  };

  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get in Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Let's talk about everything</h3>
          <p className="contact__details">
            Don't like forms? Send me an email directly at <br />
            <a href="mailto:Leogash7@gmail.com">Leogash7@gmail.com</a>
          </p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form">
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                name="user_name"
                className="contact__form-input"
                placeholder="Insert your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                name="user_email"
                className="contact__form-input"
                placeholder="Insert your email"
                required
              />
            </div>
          </div>

          <div className="contact__form-div">
            <input
              type="text"
              name="subject"
              className="contact__form-input"
              placeholder="Insert your subject"
              required
            />
          </div>

          <div className="contact__form-div contact__form-area">
            <textarea
              name="message"
              className="contact__form-input"
              cols="30"
              rows="10"
              placeholder="Write your message"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
