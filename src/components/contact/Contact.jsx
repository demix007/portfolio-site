import React, { useRef } from 'react';
import './contact.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdOutlineMarkEmailRead } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

const Contact = () => {
  const showMessage = (message, type) => {
    if (type === 'success') {
      const successMessage = <span>{message}</span>;
      toast.success(successMessage);
    } else {
      const errorMessage = <span>{message}</span>;
      toast.error(errorMessage);
    }
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2u18gmb',
        'template_9rgp5gt',
        form.current,
        'f_VYO7byZVK1lE47U',
      )
      .then(
        (/* result */) => {
          const successMessage = 'Message has been sent successfully!';
          showMessage(successMessage, 'success');
          form.current.reset();
        },
        (/* error */) => {
          const errorMessage = 'An error occurred while sending the email.';
          showMessage(errorMessage, 'error');
        },
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailRead className="contact__option-icon" />
            <h4>Email</h4>
            <h5>ayodejiabidemi007@gmail.com</h5>
            <a
              href="mailto:ayodejiabidemi007@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+2348163046727</h5>
            <a
              href="https://api.whatsapp.com/send?phone=2348163046727"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
