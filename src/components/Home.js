import React from "react";
import { Link } from "react-router-dom";
import "./comp.css";

const Home = () => {
  return (
    <div className="webPage d-flex flex-column justify-content-evenly align-items-center">
      <h1
        className="text-center fw-bold display-2"
        style={{
          width: "100%",
          color: "#EAEFD3",
          letterSpacing: "3px",
          marginTop: "5rem",
        }}
      >
        Welcome to EVE
      </h1>
      <div
        className="d-flex flex-row justify-content-evenly align-items-center fs-3"
        style={{ width: "50%", minWidth: "30rem" }}
      >
        <Link to="/web" className="homeLinks">
          {" "}
          Web Search
        </Link>
        <Link to="/news" className="homeLinks">
          News
        </Link>
        <Link to="/images" className="homeLinks">
          Images
        </Link>
      </div>
    </div>
  );
};

export default Home;
