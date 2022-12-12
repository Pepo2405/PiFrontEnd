import React from "react";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllCountries } from "../redux/slices/countries";
export const Header = ({ nav }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getAllCountries());
    if (nav) {
      nav(1);
    }
  };
  return (
    <>
      <Link to={"/home/page/1"} onClick={handleClick} className="homeheader">
        <h1 className="border h1">WikiCountries</h1>
        <h1 className="wave h1">WikiCountries</h1>
      </Link>
    </>
  );
};

// <div
// className="header"
// style={{ color: "#eaeaea", backgroundColor: "#09ae" }}
// >
// <BiWorld className="header-text"></BiWorld>
// <h3 className="header-text">CountryPedia</h3>
// <BiWorld className="header-text"></BiWorld>
// </div>
