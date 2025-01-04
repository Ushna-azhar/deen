import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';



export default function Footer() {
  return (
    <div className="bg-teal-900 text-teal-100 py-6">
      <div className="container mx-auto px-6 text-center">
        {/* Copyright */}
        <p className="text-sm mb-2">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-teal-100 hover:text-teal-300">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-teal-100 hover:text-teal-300">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-teal-100 hover:text-teal-300">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-teal-100 hover:text-teal-300">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Additional Info */}
        <p className="text-xs text-teal-200">
          Stay connected with us on social media for the latest updates and news.
        </p>
      </div>
    </div>
  );
}
