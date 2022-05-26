import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" exact>
          Home
        </Link>
        <Link to="/about" exact>
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
