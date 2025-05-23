import React, { useRef, useState } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import { BsEnvelope, BsWhatsapp } from 'react-icons/bs';
import { BiSend } from 'react-icons/bi';
import { MdOutlineCheck } from 'react-icons/md';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // Log form data for debugging
    const formData = new FormData(form.current);
    console.log('Form data:', {
      from_name: formData.get('from_name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });

    emailjs
      .sendForm(
        'service_rxvc9mn', // EmailJS Service ID
        'template_hd07jlq', // EmailJS Template ID
        form.current,
        'E5L9gdEUc9xsoo1pO' // EmailJS Public Key
      )
      .then(
        () => {
          setMessage('Message sent successfully!');
          setIsSending(false);
          setIsSent(true);
          form.current.reset();

          setTimeout(() => {
            setIsSent(false);
            setMessage('');
          }, 5000);
        },
        (error) => {
          setMessage('Failed to send message. Please try again later.');
          setIsSending(false);
          console.error('EmailJS error:', error);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon" />
            <h4>Email</h4>
            <h5>d.animesh.pr@gmail.com</h5>
            <a
              href="mailto:d.animesh.pr@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 9350409792</h5>
            <a
              href="https://wa.me/919350409792"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className="form__header">
            <h3>Send Me a Message</h3>
            <p>I'll get back to you as soon as possible</p>
          </div>

          <input
            type="text"
            name="from_name" // Changed from "name" to match template's {{from_name}}
            placeholder="Your Full Name"
            required
          />

          <input
            type="email"
            name="email" // Matches template's {{email}} after template update
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>

          <button
            type="submit"
            className={`btn btn-primary ${isSending ? 'sending' : ''} ${isSent ? 'sent' : ''
              }`}
            disabled={isSending || isSent}
          >
            {!isSending && !isSent && (
              <>
                <span>Send Message</span>
                <BiSend className="send-icon" />
              </>
            )}
            {isSending && <span className="sending-text">Sending...</span>}
            {isSent && (
              <>
                <span>Message Sent</span>
                <MdOutlineCheck className="check-icon" />
              </>
            )}
          </button>

          {/* {message && (
            <div className={`form__message ${isSent ? 'success' : 'error'}`}>
              {message}
            </div>
          )} */}
        </form>
      </div>
    </section>
  );
};

export default Contact;