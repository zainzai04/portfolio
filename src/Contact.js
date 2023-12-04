import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <div className="contact-content">
        <section className="get-in-touch">
          <h2>Get in touch</h2>
          <p>Email: zainzai@umich.edu</p>
          <p>Phone: (555)555-5555</p>
          <p>Feel free to reach out to me with questions, work related inquiries, ideas, or even just to talk. I'll try to respond as soon as possible!</p>
        </section>
        <form className="contact-form">
          <input type="text" id="name" name="name" placeholder="Name" />
          <input type="email" id="email" name="email" placeholder="Email" />
          <textarea id="message" name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
