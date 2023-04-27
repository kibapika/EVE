import React from "react";
import axios from "axios";
import { useState } from "react";

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
    <div>
      <h1>Images</h1>
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
                <section key={element.webpageUrl}>
                  <a href={element.webpageUrl}>
                      <img alt="No-Img-Found" src={element.url}/>
                  </a>
                  <a href={element.webpageUrl}>{element.title}</a>
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

export default Img;
