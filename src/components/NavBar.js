import React from "react";
// core components
import Header from "./Header/Header.js";
import HeaderLinks from "./Header/HeaderLinks.js";

export default function Navbar(props) {
  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        color="dark"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
    </div>
  );
}
