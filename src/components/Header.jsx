import React from "react";
import { BiWorld } from "react-icons/bi";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Link to={"/"} style={{width:"100%",textDecoration:"none",fontSize:"2rem"}}>
      <div className="header" style={{ color: "#eaeaea",backgroundColor:"#09ae" }}>
        <BiWorld></BiWorld>Header
      </div>
    </Link>
  );
};
