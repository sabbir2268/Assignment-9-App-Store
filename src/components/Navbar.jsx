import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logout } = useContext(AuthContext);

  const handleClickIcon = () => {
    navigate("/");
  };
  const handleClickUserImg = () => {
    navigate("/myProfile");
  };

  const handleLogOut = () => {
    const email = user?.email;
    logout()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${email || "User"} Logged Out Successfully`,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({ icon: "error", title: "Oops...", text: err.message });
      });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Apps</NavLink>
      </li>
      <li>
        <NavLink to="/myProfile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      {/* Start: Mobile Hamburger + Logo */}
      <div className="navbar-start flex-1">
        {/* Mobile dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-sm md:btn-lg btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <img
            onClick={handleClickIcon}
            src="/logo.png"
            alt="Logo"
            className="w-6 lg:w-10 shrink-0"
          />
          {/* Hidden on mobile */}
          <Link
            to="/"
            className="font-bold text-2xl underline decoration-blue-600 decoration-5 hidden lg:block"
          >
            GeminiApps
          </Link>
        </div>
      </div>

      {/* Center: Horizontal menu for tablet+ */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
      </div>

      {/* End: Action Button */}
      <div className="navbar-end flex gap-2 items-center">
        <div className="relative group">
          <img
            src={user ? user.photoURL : "/profile.png"}
            alt="user image"
            className={`w-8 h-8 rounded-full cursor-pointer ${
              !user && "hidden"
            }`}
            onClick={handleClickUserImg}
          />
          {user && (
            <span
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2
                 bg-gray-800 text-white text-xs px-2 py-1 rounded 
                 opacity-0 group-hover:opacity-100 transition"
            >
              {user.email}
            </span>
          )}
        </div>

        {user ? (
          <Link to="/" onClick={handleLogOut} className="btn btn-primary">
            Logout
          </Link>
        ) : (
          <Link to="/auth/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
