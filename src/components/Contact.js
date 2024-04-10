import React from 'react';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Contact = () => {
  return (
    <div>
      <Navigation />
      <div className="container mt-5">
        <h1 className="mb-4">Get in Touch</h1>
        <p>I'm always open to discussing new opportunities, projects, or just connecting to exchange ideas. Feel free to reach out to me through any of the following platforms:</p>
        
        <ul className="list-group mb-4">
          <li className="list-group-item">Email: <a href="mailto:gokulan1612@gmail.com">gokulan1612@gmail.com</a></li>
          <li className="list-group-item">LinkedIn: <a href="https://linkedin.com/in/GokulanVigneswaran" target="_blank" rel="noopener noreferrer">Gokulan Vigneswaran</a></li>
          <li className="list-group-item">GitHub: <a href="https://github.com/GokulanRatna?tab=repositories" target="_blank" rel="noopener noreferrer">GokulanRatna</a></li>
          <li className="list-group-item">Phone: <a href="tel:+447384416081">07384416081</a></li>
        </ul>
        
        <p>If you prefer, you can also fill out the form below, and I'll get back to you as soon as possible:</p>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" id="name" name="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email:</label>
            <input type="email" className="form-control" id="email" name="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea className="form-control" id="message" name="message" rows="3"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
