import React from "react";
import spin from "./spin.svg";

export default () => {
  return (
    <div>
      <img
        src={spin}
        style={{ width: "200px", margin: "auto", display: "block" }}
        alt="Loading..."
      />
    </div>
  );
};
