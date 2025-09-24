import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

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
    logout()
      .then((result) => {
        alert("user logged out", result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const links = (
    <>
      <li>
        <Link to="/">Apps</Link>
      </li>
      <li>
        <Link to="/myProfile">My Profile</Link>
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
        <img
          src={`${user ? user.photoURL : "/profile.png"}`}
          alt="user image"
          className="w-8 h-8 rounded-full"
          onClick={handleClickUserImg}
        />

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
