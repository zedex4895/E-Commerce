import React, { useState } from 'react';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server or email service (implement your logic here)
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000); // Reset form after 3 seconds
  };

  return (
    <div className="contact-page">
      <section className="hero">
        <img src="hero-image.jpg" alt="Hero Image" />
        <h1>Get in touch</h1>
        <p>We'd love to hear from you!</p>
      </section>
      <section className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li>
            <i className="fas fa-envelope"></i>
            <a href="mailto:your@email.com">your@email.com</a>
          </li>
          <li>
            <i className="fas fa-phone"></i>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <p>123 Main Street, Anytown, CA 12345</p>
          </li>
        </ul>
        <ul className="social-media">
          <li>
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          {/* ... more social media links */}
        </ul>
      </section>
      <section className="contact-form">
        <h2>Send a Message</h2>
        {formSubmitted && (
          <p className="success-message">Your message has been sent!</p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
