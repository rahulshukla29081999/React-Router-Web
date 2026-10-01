import React from "react";
import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center text-center px-4">
      <h3 className="text-3xl font-extrabold text-red-600 mb-2">
        An Error Occurred.
      </h3>
      <p className="text-slate-600 text-lg mb-6 max-w-md">{error.message}</p>
      <button
        className="px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition shadow-sm cursor-pointer"
        onClick={() => navigate("/")}
      >
        GO Back To Home Page
      </button>
    </div>
  );
};

export default Error;
