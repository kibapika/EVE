import React from "react";
import axios from "axios";
import { useState } from "react";
import "./comp.css";

const Web = () => {
  const [response, setResponse] = useState(null);
  const [desc, setDesc] = useState("");

  const fetchWeb = async () => {
    try {
      const res = await axios.get(
        "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/WebSearchAPI",
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
        fetchWeb();
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
            style={{ width: "25rem", color: "#EAEFD3", marginTop: "6rem" }}
          >
            <h1 className="fs-2" style={{ letterSpacing: "2px" }}>
              Web Search
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
            style={{ width: "25rem", color: "#EAEFD3"}}
          >
            <h1 style={{ letterSpacing: "2px", fontSize: "3.5rem", marginBottom:"13px" }}>
              Web Search
            </h1>
            <input
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
              onKeyPress={search}
              type="text"
              required
              style={{ width: "14rem", height: "2.5rem", padding:"8px", letterSpacing:"0.75px", borderRadius:"13px" }}
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
                  key={element.id}
                  className="d-flex flex-column justify-content-evenly my-4"
                >
                  <a href={element.url} className="links fs-3">
                    {element.title}
                  </a>
                  <span style={{ color: "#DCC48E", fontSize: "12px" }}>
                    {element.url}
                  </span>
                  <p style={{ fontSize: "14.5px" }}>{element.description}</p>
                  <img alt="" class="webImg rounded" src={element.image.url} />
                </section>
              );
            })}
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default Web;
