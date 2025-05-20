import React from "react";
import { Link } from "react-router";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">GardenConnect</h2>
          <p className="text-sm">
            A community hub for gardening lovers. Share tips, find local events,
            and grow together.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/forum" className="hover:underline">
                Forum
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:underline">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-6 border-t border-green-700 pt-4">
        &copy; {new Date().getFullYear()} GardenConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
