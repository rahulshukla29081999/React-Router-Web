import React from "react";
import { Outlet } from "react-router-dom";

const JobsLayout = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
        Jobs Openings
      </h2>

      <p>List of current available positions in our company</p>
      <br />
      <Outlet />
    </div>
  );
};

export default JobsLayout;
