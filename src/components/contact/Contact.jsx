import React from 'react'
import './contact.css'
import { useRef } from 'react'
import { useState } from 'react'
import emailjs from 'emailjs-com'
import {BsEnvelope} from 'react-icons/bs'
// import {FaHatWizard} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  const form = useRef();
  const [msg, setMsg] = useState("");
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_huye5rp', 'template_8s241o1', form.current, 'jZiYK-b8rl7K0oPLx')
    setMsg("Message sent. Thanks!")
    e.target.reset()
      // .then((result) => {
      //     console.log(result.text);
      // }, (error) => {
      //     console.log(error.text);
      // });
  };

  return (
    <section id='contact'>
      <h5>For queries and services</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsEnvelope className="contact__option-icon"/>
            <h4>E-mail</h4>
            <h5>anni8sept@gmail.com</h5>
            <a href="mailto: anni8sept@gmail.com" target="_blank">Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+91 9350409792</h5>
            <a href="https://api.whatsapp.com/send?phone=+919350409792" target="_blank" rel="noopener noreferrer">Message</a>
          </article>
        </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Enter Name" required />
            <input type="email" name="email" placeholder="Enter e-mail" required />
            <textarea name="message" rows="7" required placeholder="Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send</button><span>{msg}</span>
          </form>
      </div>
    </section>
  )
}

export default Contact