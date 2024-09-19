import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-cofee_dark text-gray-800 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-cofee_ligt">Viabletree</h3>
          <p>+92 227891987</p>
          <p>
            <a
              href="mailto:hello@MRs.com"
              className="text-cofee hover:underline"
            >
              hello@MRS.com
            </a>
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-cofee hover:text-cofee_ligt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="text-cofee hover:text-cofee_ligt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://twitter.com"
              className="text-cofee hover:text-cofee_ligt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-cofee_ligt">Solutions</h3>
          <ul className="space-y-2">
            <li>Geo-Fencing</li>
            <li>Image Capturing</li>
            <li>face Recognization</li>
            <li>Data Synchronization</li>
            
            
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-cofee_ligt">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Core Services Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-cofee_ligt">Core Services</h3>
          <ul className="space-y-2">
            <li>Web Application Development</li>
            <li>Mobile App Development</li>
            <li>Website Development</li>
            
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
