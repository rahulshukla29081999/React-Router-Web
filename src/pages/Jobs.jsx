import React from "react";
import { useLoaderData } from "react-router-dom";

import { Link } from "react-router-dom";
const Jobs = () => {
  const jobsData = useLoaderData();
  return (
    <div className="jobs">
      {jobsData.map((job) => {
        return (
          <Link to={job.id.toString()} key={job.id}>
            <h4 className="text-lg font-bold ">{job.title}</h4>
            <p>{job.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

export const jobsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:5000/jobs/");
  if (!res.ok) {
    throw Error("Could not found job list");
  }
  return res.json();
};
