import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import bg from "./earths.mp4";

export const Welcome = () => {
  return (
    <>
      <Link to="/home/page/1">
        <Button
          style={{ position: "absolute", top: "50%",left:"50%" }}
          text={"Ingresar"}
        />
      </Link>
      <video autoPlay loop className="video" muted>
        <source src={bg} type="video/mp4"></source>
      </video>
    </>
  );
};
