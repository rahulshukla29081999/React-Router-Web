import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>404 Error: Page Not Found</h2>
      <br />
      <button
        className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
        onClick={() => navigate("/")}
      >
        Go Back To Home
      </button>
    </div>
  );
};

export default NotFound;
