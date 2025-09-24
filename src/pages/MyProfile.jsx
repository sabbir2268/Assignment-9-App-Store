import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, Navigate } from "react-router";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/auth/login"></Navigate>;
  }

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-white shadow-xl rounded-2xl text-center">
      {/* Profile Picture */}
      <div className="flex justify-center mb-4">
        <img
          src={user.photoURL || "/images/defaultUser.png"} // fallback image from public
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
        />
      </div>

      {/* Name */}
      <h1 className="text-2xl font-bold text-gray-800">
        {user.displayName || "Anonymous User"}
      </h1>

      {/* Email */}
      <p className="text-gray-500">{user.email}</p>

      {/* Extra actions (optional) */}
      <div className="mt-6 space-x-3">
        <button className="btn btn-neutral">Edit Profile</button>
        <Link to="/" className="btn btn-outline">
          Back Home
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
