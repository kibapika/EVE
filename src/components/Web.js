import React from "react";
import axios from "axios";
import { useState } from "react";

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
      <div className="d-flex flex-row justify-content-evenly align-items-center my-3" style={{width: "25rem", color: "#EAEFD3"}}>
        <h1 className="fs-3" style={{letterSpacing: "2px"}}>Web Search</h1>
        <input
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
          onKeyPress={search}
          type="text"
          required
          style={{width: "11rem"}}
        />
      </div>
      <section style={{color: "#EAEFD3", letterSpacing:"2px"}}>
        {response != null ? (
          <div className="d-flex flex-column justify-content-evenly align-items-center">
            {response.map((element) => {
              return (
                <section key={element.id}>
                  <a href={element.url}>{element.title}</a>
                  <span>{element.url}</span>
                  <p>{element.description}</p>
                  <img alt="" src={element.image.url} />
                </section>
              );
            })}
          </div>
        ) : (
          "No information found... :("
        )}
      </section>
    </div>
  );
};

export default Web;
