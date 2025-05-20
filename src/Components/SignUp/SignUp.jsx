import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { signUp, googleLogin, updateUserProfile, setUser } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmitWithSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, password, photo } = Object.fromEntries(
      formData.entries()
    );

    if (password.length < 6) {
      Swal.fire({
        icon: "warning",
        title: "Weak Password",
        text: "Password must be at least 6 characters long.",
      });
      return;
    }

    signUp(email, password)
      .then((result) => {
        const user = result.user;
        return updateUserProfile({
          displayName: name,
          photoURL: photo,
        }).then(() => {
          if (setUser) {
            setUser({
              ...user,
              displayName: name,
              photoURL: photo,
            });
          }
        });
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registration Successful!",
          text: "Welcome aboard!",
          timer: 2000,
          timerProgressBar: true,
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
      .then((result) => {
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
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          🌱 Register
        </h2>

        <form onSubmit={handleFormSubmitWithSignUp} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full p-3 border rounded"
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
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
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700"
          >
            Register
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
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-green-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
