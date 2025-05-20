import React, { useContext } from "react";
import { Link, NavLink } from "react-router"; // এখানে ডোম থেকে ইম্পোর্ট
import Swal from "sweetalert2";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
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
    <nav className="bg-green-700 text-white px-6 py-3 flex justify-between items-center shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="text-2xl font-bold cursor-pointer select-none">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 font-semibold">
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
      </ul>

      {/* Auth Buttons */}
      <div className="relative flex items-center space-x-2">
        {!user ? (
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
        ) : (
          <div className="flex items-center space-x-2">
            <img
              src={user.photoURL || "https://via.placeholder.com/40"}
              alt={user.displayName || "User photo"}
              title={user.displayName || "User"}
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-3 py-1 rounded shadow-lg hover:bg-red-700 text-sm transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
