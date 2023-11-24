import Template from "./TemplateTable";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import { WordsContext } from "../context/ContextProvider";

const Loading = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-size: 54px;
  font-weight: 600;
`;

export default function TableWords() {
  //const context = useContext(WordsContext);
  //const words = context.words;

  const [words, setWords] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://6536ba1dbb226bb85dd28e56.mockapi.io/api/diploma_blog/english_game"
      )
      .then((response) => {
        setWords(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // here we use words got from context
  // if (!words) {
  //   return <Loading>Loading...</Loading>;
  // } else if (words) {
  //   console.log(words);
  // }

  return (
    <>
      <tbody>
        {" "}
        {words.map((word, id) => (
          <Template
            // key & id we get from JSON as id & tags_json
            //key={id} // id
            key={word.id} // tags_json
            tags={word.tags}
            english={word.english}
            transcription={word.transcription}
            russian={word.russian}
            name={"Edit"}
          ></Template>
        ))}
      </tbody>
    </>
  );
}
