import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <div>
        <img
          className="w-50 mt-4"
          src="https://admiral.digital/wp-content/uploads/2023/08/404_page-not-found-1024x576.png"
          alt=""
        />
      </div>

      <div>
        <Link to={"/"}>
        <button className="btn btn-primary " >Go to Home</button></Link>
      </div>
    </div>
  );
};

export default PageNotFound;
