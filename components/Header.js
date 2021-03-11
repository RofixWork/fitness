import React from "react";
import Banner from "./Banner";
import Info from "./Info";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Info />
      <Navbar />
      <Banner />
    </header>
  );
};

export default Header;
