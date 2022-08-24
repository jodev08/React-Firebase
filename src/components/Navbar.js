import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { toggleModals } = useContext(UserContext);
  return (
    <nav className="navbar navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">
        authjs
      </Link>

      <div>
        <button
          onClick={() => toggleModals("signIn")}
          className="btn btn-primary"
        >
          connecter
        </button>

        <button
          onClick={() => toggleModals("signUp")}
          className="btn btn-primary ms-2"
        >
          inscrire
        </button>
        <button className="btn btn-danger ms-2">deconnection</button>
      </div>
    </nav>
  );
}
