import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); // reset error
    const form = e.target;
    const name = form.name.value.trim();
    const photo = form.photo.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    // validation
    const newErrors = {};
    if (name.length < 5) newErrors.name = "Name must be at least 5 characters.";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email address.";
    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (password !== confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return; // stop if validation failed
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });

            // Success SweetAlert
            Swal.fire({
              title: "Success!",
              text: `User created: ${user.email}`,
              icon: "success",
              confirmButtonText: "OK",
            });

            form.reset();
            navigate("/");
          })
          .catch((err) => {
            setUser(user);

            // Error SweetAlert
            Swal.fire({
              title: "Oops...",
              text: err.message,
              icon: "error",
              confirmButtonText: "Try Again",
            });

            setError(err.message);
          });
      })
      .catch((err) => {
        // Error SweetAlert
        Swal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
          confirmButtonText: "Close",
        });

        setError({ firebase: err.message });
      });
  };

  useEffect(() => {
    document.title = "Registration | GeminiApp";
  }, []);

  return (
    <>
      <Helmet>
        <title>Registration | GeminiApp</title>
        <meta name="description" content="Access your GeminiApp account." />
      </Helmet>

      <div className="flex justify-center my-20">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <h1 className="text-center text-3xl font-bold pt-10 border-b-2 border-gray-300 pb-5 mx-5">
            Register your account
          </h1>
          <div className="card-body">
            {/* show error */}
            {error && typeof error === "object" && (
              <ul className="text-red-500 text-sm mb-2 list-disc pl-4">
                {Object.values(error).map((msg, idx) => (
                  <li key={idx}>{msg}</li>
                ))}
              </ul>
            )}
            {error && typeof error === "string" && (
              <p className="text-red-500 text-sm mb-2">{error}</p>
            )}

            <form onSubmit={handleRegister} className="space-y-3">
              {/* Name */}
              <div>
                <label className="label text-black font-semibold">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input w-full"
                  required
                />
              </div>

              {/* Photo URL */}
              <div>
                <label className="label text-black font-semibold">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Enter your photo URL"
                  className="input w-full"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="label text-black font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="input w-full"
                  autoComplete="username"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="label text-black font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Set your password"
                  className="input w-full"
                  autoComplete="new-password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="label text-black font-semibold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your password"
                  className="input w-full"
                  autoComplete="new-password"
                  required
                />
              </div>

              {/* Register button */}
              <button type="submit" className="btn btn-neutral w-full mt-2">
                Register
              </button>

              {/* Login link */}
              <p className="pt-4 text-center text-gray-700">
                Already have an account?{" "}
                <Link
                  to="/auth/login"
                  className="text-blue-700 link link-hover"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
