import React from "react";
import { Link } from "react-router-dom";
import "./comp.css";

const Home = () => {
  return (
    <div className="webPage d-flex flex-column justify-content-evenly align-items-center" style={{ width: "90vw", paddingTop:"32.5vh" }}>
      <h1
        className="text-center fw-bold display-2 text-wrap"
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
        className="frontLinks d-flex flex-row justify-content-evenly align-items-center fs-3">
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
