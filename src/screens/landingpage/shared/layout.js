import React from "react";
import { Link } from "react-router-dom";

import { NavbarLandingPage } from "../../../components";

export const LandingPageLayout = (props) => {
  return (
    <>
      <NavbarLandingPage />
      <main>{props.children}</main>
    </>
  );
};
