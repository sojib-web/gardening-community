// src/components/Navbar.jsx
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import Swal from "sweetalert2";
import logo from "../../assets/logo1.png";
import { AuthContext } from "../../Context/AuthContext";
import { Menu, MoonIcon, SunIcon, X } from "lucide-react";
import { DarkModeContext } from "../../Context/DarkModeContext";

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#16a34a",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire("Logged Out!", "You have been logged out.", "success");
          })
          .catch((error) => {
            Swal.fire("Error", error.message, "error");
          });
      }
    });
  };

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-green-300 font-bold"
      : "hover:text-green-300 transition duration-200";

  return (
    <nav
      className={`px-6 py-3 shadow-md sticky top-0 z-50 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-green-800 text-white"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-6 font-semibold items-center">
          <li>
            <NavLink to="/" className={navLinkStyle}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/gardenersList" className={navLinkStyle}>
              Explore Gardeners
            </NavLink>
          </li>
          <li>
            <NavLink to="/browseTips" className={navLinkStyle}>
              Browse Tips
            </NavLink>
          </li>
          <li>
            <NavLink to="/shareGardenTip" className={navLinkStyle}>
              Share a Garden Tip
            </NavLink>
          </li>
          <li>
            <NavLink to="/myTips" className={navLinkStyle}>
              My Tips
            </NavLink>
          </li>

          {/* Dark Mode Toggle Button */}
          <li>
            <button
              onClick={toggleDarkMode}
              className="px-5 py-2 rounded  transition"
            >
              {darkMode ? <SunIcon /> : <MoonIcon />}
            </button>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          {user?.email ? (
            <>
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt={user.displayName || "User photo"}
                title={user.displayName || "User"}
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />

              {/* Dashboard Link */}
              <Link
                to="/dashboard"
                className="bg-green-500 text-white px-4 py-1 rounded font-semibold transition"
                title="Dashboard"
              >
                Dashboard
              </Link>

              <button
                onClick={handleLogout}
                className="bg-green-500 px-4 py-1 rounded font-semibold transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded font-semibold transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded font-semibold transition"
              >
                SignUp
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          <ul className="flex flex-col space-y-2 font-semibold">
            <li>
              <NavLink
                to="/"
                className={navLinkStyle}
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/gardenersList"
                className={navLinkStyle}
                onClick={() => setMenuOpen(false)}
              >
                Explore Gardeners
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browseTips"
                className={navLinkStyle}
                onClick={() => setMenuOpen(false)}
              >
                Browse Tips
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shareGardenTip"
                className={navLinkStyle}
                onClick={() => setMenuOpen(false)}
              >
                Share a Garden Tip
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/myTips"
                className={navLinkStyle}
                onClick={() => setMenuOpen(false)}
              >
                My Tips
              </NavLink>
            </li>
          </ul>

          {/* Dark Mode Toggle Button (Mobile) */}
          <div className="mt-2 flex justify-center">
            <button
              onClick={() => {
                toggleDarkMode();
                setMenuOpen(false);
              }}
              className="px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
            >
              {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            </button>
          </div>

          {/* Auth buttons */}
          <div className="mt-2">
            {user?.email ? (
              <div className="flex items-center space-x-2">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt={user.displayName || "User photo"}
                  title={user.displayName || "User"}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <button
                  onClick={handleLogout}
                  className="bg-green-500 px-4 py-1 rounded font-semibold transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col space-y-2">
                <Link
                  to="/login"
                  className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded font-semibold transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded font-semibold transition"
                >
                  SignUp
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
