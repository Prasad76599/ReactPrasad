import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactUs() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <form>
            {/* Name Field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name" 
                placeholder="Enter your name" 
              />
            </div>
            {/* Email Field */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="name@example.com" 
              />
            </div>
            {/* Subject Field */}
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input 
                type="text" 
                className="form-control" 
                id="subject" 
                placeholder="Subject" 
              />
            </div>
            {/* Message Field */}
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea 
                className="form-control" 
                id="message" 
                rows="5" 
                placeholder="Your message"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="d-grid">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
