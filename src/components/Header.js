import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" to="/">
        {" "}
        <i className="big video icon"></i>
      </Link>
      <div className="right menu">
        <Link className="ui item" to="/">
          All Streams
        </Link>
        <Link className="ui item" to="/">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
