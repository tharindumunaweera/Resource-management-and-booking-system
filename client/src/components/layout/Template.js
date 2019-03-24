import React from "react";
import Routes from "../Routes";
import TopNavigation from "../sideNavigation";
import SideNavigation from "../topNavigation";
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
