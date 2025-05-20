import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

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

  return (
    <nav className="bg-green-700 text-white px-6 py-3 flex justify-between items-center shadow-md sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="text-2xl font-bold cursor-pointer select-none">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      {/* Center/Right: Links */}
      <ul className="hidden md:flex space-x-8 font-semibold">
        <li>
          <a href="/" className="hover:text-green-300">
            Home
          </a>
        </li>
        <li>
          <a href="/gardenersList" className="hover:text-green-300">
            Explore Gardeners
          </a>
        </li>
        <li>
          <a href="/browseTips" className="hover:text-green-300">
            Browse Tips
          </a>
        </li>
        <li>
          <a href="/shareGardenTip" className="hover:text-green-300">
            Share a Garden Tip
          </a>
        </li>
        <li>
          <a href="/myTips" className="hover:text-green-300">
            My Tips
          </a>
        </li>
      </ul>

      {/* Right: Login/Signup or User */}
      <div className="relative flex items-center space-x-2">
        {!user ? (
          <>
            <button>
              <a
                href="/login"
                className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded font-semibold transition"
              >
                Login
              </a>
            </button>
            <button>
              <a
                href="/signup"
                className="bg-green-500 hover:bg-green-600 px-4 py-1 rounded font-semibold transition"
              >
                SignUp
              </a>
            </button>
          </>
        ) : (
          <div className="flex items-center space-x-2">
            <img
              src={user.photoURL || "https://via.placeholder.com/40"}
              alt={user.displayName || "User"}
              className="w-10 h-10 rounded-full border-2 border-white"
              title={user.displayName || "User"}
            />
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white px-3 py-1 rounded shadow-lg hover:bg-red-700 text-sm"
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
