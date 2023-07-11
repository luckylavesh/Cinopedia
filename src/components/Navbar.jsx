import React from "react";
import { Link } from "react-router-dom";
import tmdb from "../images/tmdb.svg";

const Navbar = () => {
  return (
    <nav>
      <h1 className="title">
        <Link to="/">Cinopedia</Link>
      </h1>
      <img className="attribution" src={tmdb} alt=""></img>
    </nav>
  );
};

export default Navbar;
