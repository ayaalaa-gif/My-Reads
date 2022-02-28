import React from "react";
import { Link } from "react-router-dom";
const Button = () => {

  return (
    <div className="open-search">
        <Link className="searchBtn" to="/search">Add a book</Link>
    </div>
  );
};
export default Button;
