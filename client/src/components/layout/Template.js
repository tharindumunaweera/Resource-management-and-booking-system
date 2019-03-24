import React from "react";
import Routes from "../Routes";
import SideNavigation from "../sideNavigation";
import TopNavigation from "../topNavigation";
//import Footer from "./components/Footer";

const Template = () => {
  return (
    <div className="flexible-content">
      <TopNavigation />
      <SideNavigation />
      <main id="content" className="p-3">
        <Routes />
      </main>
    </div>
  );
};

export default Template;
