import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faCommentDots } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold text-center mb-4">Get in Touch</h2>
      <p className="text-center mb-6">
        Phone num: <a href="tel:+8298393638" className="text-blue-600">+8298393638</a>
        <br />
        Email address: <a href="mailto:shweeta@gamil.com" className="text-blue-600">shweeta@gamil.com</a>
      </p>
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="w-full md:w-1/2">
          <div className="relative mb-4">
            <FontAwesomeIcon icon={faUser} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 p-2 border border-gray-300 rounded-md"
              placeholder="Your Name"
            />
          </div>
          <div className="relative mb-4">
            <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              className="w-full pl-10 p-2 border border-gray-300 rounded-md"
              placeholder="Your Email"
            />
          </div>
          <div className="relative">
            <FontAwesomeIcon icon={faPhone} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              className="w-full pl-10 p-2 border border-gray-300 rounded-md"
              placeholder="Your Contact"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="relative">
            <FontAwesomeIcon icon={faCommentDots} className="absolute left-3 top-3 text-gray-400" />
            <textarea
              className="w-full pl-10 p-2 border border-gray-300 rounded-md"
              placeholder="Description"
              rows="6"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="text-center ">
        <button className="px-6  py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactUs;
