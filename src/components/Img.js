import React from "react";
import axios from "axios";
import { useState } from "react";
import "./comp.css";

const Img = () => {
  const [response, setResponse] = useState(null);
  const [desc, setDesc] = useState("");

  const fetchImg = async () => {
    try {
      const res = await axios.get(
        "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
        {
          headers: {
            "X-RapidAPI-Key":
              "4c2350f8fdmsh67c94cfd9be6a99p12e932jsn8bf982d7a5dd",
            "X-RapidAPI-Host":
              "contextualwebsearch-websearch-v1.p.rapidapi.com",
          },
          params: {
            q: desc,
            pageNumber: "1",
            pageSize: "10",
            autoCorrect: "true",
          },
        }
      );
      setResponse(res.data.value);
    } catch (err) {
      console.log(err);
    }
  };

  const search = async (evt) => {
    try {
      if (evt.key === "Enter") {
        evt.preventDefault();
        fetchImg();
        console.log("results --->", response);
        setDesc("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-evenly align-items-center">
      <section>
        {response != null ? (
          <div
            className="d-flex flex-row justify-content-evenly align-items-center mb-3"
            style={{ width: "20rem", color: "#EAEFD3", marginTop: "6rem" }}
          >
            <h1 className="fs-2" style={{ letterSpacing: "2px" }}>
              Images
            </h1>
            <input
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
              onKeyPress={search}
              type="text"
              required
              style={{ width: "11rem" }}
            />
          </div>
        ) : (
          <div
            className="d-flex flex-column justify-content-evenly align-items-center"
            style={{ width: "25rem", color: "#EAEFD3" }}
          >
            <h1
              style={{
                letterSpacing: "2px",
                fontSize: "3.5rem",
                marginBottom: "13px",
              }}
            >
              Images
            </h1>
            <input
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
              onKeyPress={search}
              type="text"
              required
              style={{
                width: "14rem",
                height: "2.5rem",
                padding: "8px",
                letterSpacing: "0.75px",
                borderRadius: "13px",
              }}
            />
          </div>
        )}
      </section>
      <section style={{ color: "#EAEFD3", letterSpacing: "2px" }}>
        {response != null ? (
          <div
            className="d-flex flex-column justify-content-evenly"
            style={{ width: "90vw" }}
          >
            {response.map((element) => {
              return (
                <section
                  key={element.webpageUrl}
                  className="d-flex flex-column justify-content-evenly align-items-center my-4"
                >
                  <a href={element.webpageUrl}>
                    <img
                      alt="No-Img-Found"
                      class="webImg rounded"
                      src={element.url}
                    />
                  </a>
                  <a
                    href={element.webpageUrl}
                    className="links"
                    style={{ fontSize: "12px" }}
                  >
                    {element.title}
                  </a>
                </section>
              );
            })}
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default Img;
