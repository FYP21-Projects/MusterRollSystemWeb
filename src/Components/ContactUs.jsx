import React from "react";

function ContactUs() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cofee p-6">
      <div className="max-w-md w-full bg-cofee_dim shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-cofee_dark text-center mb-4">
          Get in Touch
        </h2>
        <div className="text-center text-cofee_ligt mb-6">
          <p>
            <i className="fas fa-phone"></i> Phone: +8298393638
          </p>
          <p>
            <i className="fas fa-envelope"></i> Email: shweeta@gmail.com
          </p>
        </div>
        <form className="space-y-4">
          <div>
            <label className="sr-only" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cofee_dark"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cofee_dark"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="contact">
              Phone Number
            </label>
            <input
              id="contact"
              type="text"
              placeholder="Phone Number (optional)"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cofee_dark"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cofee_dark"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-cofee_dark text-cofee font-bold p-3 rounded-lg hover:bg-cofee_ligt hover:text-cofee_dark transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
