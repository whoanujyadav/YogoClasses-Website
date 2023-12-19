import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        YOGA Classes
      </Link>
      <ul>
        <CustomLink to="/newuser">New Registration</CustomLink>
        <CustomLink to="/alreayregistered">Already Registered</CustomLink>
      </ul>
    </nav>
  );
};

export default Navbar;