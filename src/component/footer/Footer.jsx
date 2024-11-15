// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-lg font-semibold">AROCK</h3>
          <p className="text-sm">© {new Date().getFullYear()} AROCK. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="/home" className="text-gray-400 hover:text-white">Home</a>
          <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
          <a href="/services" className="text-gray-400 hover:text-white">Services</a>
          <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
        </div>
        
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">Instagram</a>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
