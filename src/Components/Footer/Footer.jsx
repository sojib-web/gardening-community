// @ts-nocheck
import React, { useContext } from "react";
import { Link } from "react-router"; // যদি react-router-dom হয়, সেটা পরিবর্তন করো
import { Facebook, Instagram, Twitter } from "lucide-react";
import logo from "../../assets/logo1.png";
import { DarkModeContext } from "../../Context/DarkModeContext";

const Footer = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <footer
      className={`py-8  transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-300" : "bg-green-900 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo & Description */}
        <div>
          <img
            src={logo}
            alt="GardenConnect Logo"
            className="w-32 h-auto mb-3 rounded-xl shadow-lg"
          />
          <h2
            className={`text-2xl font-bold mb-2 ${
              darkMode ? "text-lime-400" : ""
            }`}
          >
            GardenConnect
          </h2>
          <p className={`text-sm ${darkMode ? "text-gray-400" : ""}`}>
            A community hub for gardening lovers. Share tips, find local events,
            and grow together.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3
            className={`font-semibold text-lg mb-2 ${
              darkMode ? "text-lime-400" : ""
            }`}
          >
            Quick Links
          </h3>
          <ul className="space-y-1 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/gardenersList", label: "Explore Gardeners" },
              { to: "/browseTips", label: "Browse Tips" },
              { to: "/shareGardenTip", label: "Share a Garden Tip" },
              { to: "/myTips", label: "My Tips" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`hover:underline ${
                    darkMode ? "text-gray-400 hover:text-lime-400" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3
            className={`font-semibold text-lg mb-2 ${
              darkMode ? "text-lime-400" : ""
            }`}
          >
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-lime-400"
                  : "text-white hover:text-green-400"
              }`}
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-lime-400"
                  : "text-white hover:text-green-400"
              }`}
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className={`${
                darkMode
                  ? "text-gray-400 hover:text-lime-400"
                  : "text-white hover:text-green-400"
              }`}
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`text-center text-sm mt-6 border-t pt-4 transition-colors duration-300 ${
          darkMode
            ? "border-gray-700 text-gray-500"
            : "border-green-700 text-white"
        }`}
      >
        &copy; {new Date().getFullYear()} GardenConnect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
