import { NavLink } from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const MainNav = () => {
  let { isAuthenticated } = useAuth0();
  {/* isAuthenticated checks if the user is authenticated/logged in, and if that is true it returns the 
  first part of the code, 4 Navlinks. If the answer is false it returns second part, only "Home" NavLink. */}
  if (isAuthenticated) {
    return (
      <div className="navbar-nav mr-auto">
        <NavLink
          to="/"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
        >
          Profile
        </NavLink>
        <NavLink
          to="/external-api"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
        >
          External API
        </NavLink>
        <NavLink
          to="/nikola"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
        >
          Nikola
        </NavLink>
      </div>
    );
  } else {
    return (
      <div className="navbar-nav mr-auto">
        <NavLink
          to="/"
          exact
          className="nav-link"
          activeClassName="router-link-exact-active"
        >
          Home
        </NavLink>
      </div>
    );
  }
};

export default MainNav;
