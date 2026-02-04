import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          TransactionSystem
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isLoggedIn && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/order">
                    Order
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/wallet">
                    Wallet
                  </Link>
                </li>

                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link text-white"
                    onClick={onLogout}
                  >
                    Logout
                  </button>
                </li>
              </>
            )}

            {!isLoggedIn && (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
