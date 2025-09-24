import React from "react";
import Navbar from "../components/Navbar";
import { Navigate, Outlet } from "react-router";
import { AuthContext } from "../provider/AuthProvider";

const AuthLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
