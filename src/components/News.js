import React from "react";
import axios from "axios";
import { useState } from "react";

const News = () => {
  const [response, setResponse] = useState(null);
  const [desc, setDesc] = useState("");

  const fetchNews = async () => {
    try {
      const res = await axios.get(
        "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
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
            fromPublishedDate: "null",
            toPublishedDate: "null",
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
        fetchNews();
        console.log("results --->", response);
        setDesc("");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>News Search</h1>
      <div>
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
                  <span>{element.datePublished}</span>
                  {/* <p>{element.description}</p> */}
                  <p>{element.snippet}</p>
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

export default News;
