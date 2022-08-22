import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        authjs
      </Link>

      <div>
        <button className="btn btn-primary">sign up</button>
        <button className="btn btn-primary ms-2">sign in</button>
        <button className="btn btn-danger ms-2">log out</button>
      </div>
    </nav>
  );
}
