import React from 'react';
import Navigation from './Navigation';

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div style={{ padding: '0 20px' }}>
        <h1>Get in Touch</h1>
        <p>I'm always open to discussing new opportunities, projects, or just connecting to exchange ideas. Feel free to reach out to me through any of the following platforms:</p>
        
        <ul>
          <li>Email: <a href="mailto:gokulan1612@gmail.com">gokulan1612@gmail.com</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/GokulanVigneswaran" target="_blank" rel="noopener noreferrer">Gokulan Vigneswaran</a></li>
          <li>GitHub: <a href="https://github.com/GokulanRatna?tab=repositories" target="_blank" rel="noopener noreferrer">GokulanRatna</a></li>
          <li>Phone: <a href="tel:+447384416081">07384416081</a></li>
        </ul>
        
        <p>If you prefer, you can also fill out the form below, and I'll get back to you as soon as possible:</p>
        <form>
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message" />
          </label>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
