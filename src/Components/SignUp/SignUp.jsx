/* eslint-disable no-unused-vars */
// @ts-nocheck
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { auth } from "../../firebase/Firebase_config";

const SignUp = () => {
  const { signUp, googleLogin, updateUserProfile, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleFormSubmitWithSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, password, photo } = Object.fromEntries(
      formData.entries()
    );

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
    if (!passwordRegex.test(password)) {
      Swal.fire({
        icon: "warning",
        title: "Weak Password",
        text: "Password must be 8+ chars, with 1 uppercase, 1 lowercase, and 1 special character",
      });
      return;
    }

    signUp(email, password)
      .then(() => {
        return updateUserProfile({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          const updateUser = {
            ...auth.currentUser,
            displayName: name,
            photoURL: photo,
          };
          setUser(updateUser);
        });
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "Welcome aboard! 🎉",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Registration Failed",
          text: error.message || "Something went wrong!",
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Google Sign-In Successful!",
          timer: 1500,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign-In Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full relative">
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 rounded-full bg-green-500 text-white text-3xl font-bold flex items-center justify-center shadow-xl border-4 border-white">
            🌱
          </div>
        </div>

        <h2 className="text-3xl font-extrabold text-center text-green-700 mt-16 mb-8">
          Create an Account
        </h2>

        <form onSubmit={handleFormSubmitWithSignUp} className="space-y-5">
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Photo URL</label>
            <input
              type="text"
              name="photo"
              placeholder="https://your-image.jpg"
              className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="w-full p-3 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-gray-600"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-all shadow"
          >
            Register
          </button>
        </form>

        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-red-500 text-white py-2 rounded-xl hover:bg-red-600 transition-all"
          >
            <svg className="h-5 w-5" viewBox="0 0 533.5 544.3">
              <path
                fill="#fff"
                d="M533.5 278.4c0-17.4-1.4-34.3-4.1-50.6H272v95.8h146.6c-6.3 33.7-25.1 62.2-53.7 81.2v67.3h86.7c50.8-46.8 81.9-115.9 81.9-193.7z"
              />
              <path
                fill="#fff"
                d="M272 544.3c73.6 0 135.4-24.4 180.5-66.2l-86.7-67.3c-24.1 16.2-55 25.7-93.8 25.7-71.9 0-132.7-48.5-154.4-113.8H29.1v71.7c45.4 90.1 138.8 150 242.9 150z"
              />
            </svg>
            Sign up with Google
          </button>
        </div>

        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
