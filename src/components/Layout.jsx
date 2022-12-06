import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children,nav }) => {
  return (
    <>
      <Header nav={nav}/>
      {children}
      <Footer />
    </>
  );
};
