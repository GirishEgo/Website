import React from "react";
import PanelSpaceHeatersCalculator from "./ResourcespagesComponents/calculator/PanelSpaceHeatersCalculato";
import { Outlet } from "react-router-dom";

const Resources = () => {
  return (
    <div>
      {/* <h2>Resources</h2> */}
      <Outlet />
    </div>
  );
};

export default Resources;
