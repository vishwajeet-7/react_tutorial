import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex justify-content-around border shadow p-2">
      <div className="">
        <Link to={"/"}>
          <button className="fs-4 fw-bold btn btn-primary">Home</button>
        </Link>
      </div>
      <div className="d-flex justify-content-between gap-3">
        <Link to={"/heroPage"}>
          <button className="fs-4 fw-bold btn btn-primary">Hero page</button>
        </Link>
        <Link to={"/villainPage"}>
          <button className="fs-4 fw-bold btn btn-primary">Villain page</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
