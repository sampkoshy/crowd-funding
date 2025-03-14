import React from "react";

import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="bg-[#0A1930] text-white p-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 ">
        {/* Logo & About */}
        <div> 
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="text-[#3bcf93]"></span>
            <span>Human Rights</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Happen active county. Winding morning am shyness evident to. Garrets because elderly new manners however one village she.
          </p>
          <div className="mt-4 flex items-center bg-gray-800 p-2 rounded-lg">
            <input type="email" placeholder="Your Email" className="bg-transparent flex-1 p-2 outline-none" />
            <button className="bg-[#3bcf93] px-4 py-2 rounded-lg text-black font-bold">Subscribe</button>
          </div>
        </div>
        
        {/* Explore */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="text-gray-400 space-y-2">
            <li>Our Causes</li>
            <li>New Campaign</li>
            <li>Site Map</li>
            <li>Donate</li>
            <li>Terms</li>
          </ul>
        </div>
        
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <p className="text-gray-400 flex items-center gap-2">
            <i className="fas fa-map-marker-alt text-[#3bcf93]"></i> 5919 Trussville Crossings Pkwy, Birmingham AL 35235
          </p>
          <p className="text-gray-400 flex items-center gap-2 mt-3">
            <i className="fas fa-envelope text-[#3bcf93]"></i> info@validtheme.com
          </p>
          <p className="text-gray-400 flex items-center gap-2 mt-3">
            <i className="fas fa-phone text-[#3bcf93]"></i> +123 34598768
          </p>
        </div>
        
        {/* Latest News */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Latest News</h3>
          <div className="text-gray-400">
            <p>Delighted prevailed supported too not remainder perpetual.</p>
            <span className="flex items-center gap-2 mt-2">
              <i className="fas fa-calendar-alt text-[#3bcf93]"></i> 22 AUG, 2020 - <span className="text-green-400">ADMIN</span>
            </span>
          </div>
          <div className="text-gray-400 mt-4">
            <p>Speaking trifling an to unpacked moderate debating learnin management.</p>
            <span className="flex items-center gap-2 mt-2">
              <i className="fas fa-calendar-alt text-[#3bcf93]"></i> 15 NOV, 2020 - <span className="text-green-400">USER</span>
            </span>
          </div>
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="mt-10 text-center text-gray-500 border-t border-gray-600 pt-4">
        <p>Copyright © 2020. Designed by <span className="text-green-400">validtemplates</span></p>
      </div>
    </footer>
  );
};

export default Footer;
