// @ts-nocheck
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2"; // ✅ Import Swal
import { AuthContext } from "../../Context/AuthContext";

const Login = () => {
  const { logIn, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logIn(email, password)
      .then((userCredential) => {
        console.log("Logged in:", userCredential.user);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: `Welcome back, ${userCredential.user.displayName || "User"}!`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/"); // ⏩ Redirect after success
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log("Google login success:", result.user);
        Swal.fire({
          icon: "success",
          title: "Google Login Successful!",
          text: `Welcome, ${result.user.displayName || "User"}!`,
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Google SignIn error:", error.message);
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
          🔐 Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={handleGoogleLogin}
            className="bg-red-500 text-white w-full py-2 rounded hover:bg-red-600"
          >
            Continue with Google
          </button>
        </div>

        <p className="text-center mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-600 font-medium hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
