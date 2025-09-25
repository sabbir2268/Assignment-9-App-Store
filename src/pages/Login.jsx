import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const Login = () => {
  const { logInUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/";

  // handle form login
  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: `Welcome back, ${user.displayName || user.email || "User"}!`,
          timer: 1500,
          showConfirmButton: false,
          position: "top-end",
          toast: true,
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
          confirmButtonText: "Try Again",
        });
      });
  };

  // handle Google login
  const handleGoogleLogin = async () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        Swal.fire({
          icon: "success",
          title: "Google Login Successful",
          text: `Welcome, ${user.displayName || user.email || "User"}!`,
          timer: 1500,
          showConfirmButton: false,
          position: "top-end",
          toast: true,
        });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: "Google Login Failed",
          text: errorMessage,
          confirmButtonText: "Try Again",
        });
      });
  };

  useEffect(() => {
    document.title = "Login | GeminiApp";
  }, []);

  return (
    <>
      <Helmet>
        <title>Login | GeminiApp</title>
        <meta name="description" content="Access your GeminiApp account." />
      </Helmet>
      <div className="flex justify-center my-20">
        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <h1 className="text-center text-3xl font-bold pt-10 border-b-2 border-gray-300 pb-5 mx-5">
            Login to your account
          </h1>
          <div className="card-body">
            {error && <p className="text-red-500 mb-2">{error}</p>}

            <form onSubmit={handleLogin} className="space-y-3">
              <div>
                <label className="label text-black font-semibold">Email</label>
                <input
                  type="email"
                  className="input w-full"
                  placeholder="Enter your email"
                  name="email"
                  autoComplete="username"
                  required
                />
              </div>

              <div>
                <label className="label text-black font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  className="input w-full"
                  placeholder="Enter your password"
                  name="password"
                  autoComplete="current-password"
                  required
                />
              </div>

              <div className="text-left mb-2">
                <a className="link link-hover text-blue-700 text-sm">
                  Forgot password?
                </a>
              </div>

              <button type="submit" className="btn btn-neutral w-full">
                Login
              </button>
            </form>

            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full mt-3"
            >
              Continue with Google
            </button>

            <p className="pt-4 text-center text-gray-700">
              Don’t have an account?{" "}
              <Link
                to="/auth/register"
                className="text-blue-700 link link-hover"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
