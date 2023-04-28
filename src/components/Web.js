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
    <div>
      <div className="d-flex flex-row justify-content-evenly align-items-center" style={{width: "25rem"}}>
        <h1 className="fs-3">Web Search</h1>
        <input
          value={desc}
          onChange={(event) => setDesc(event.target.value)}
          onKeyPress={search}
          type="text"
          required
        />
      </div>
      <section>
        {response != null ? (
          <div>
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
