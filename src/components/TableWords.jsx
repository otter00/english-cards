import CardWordsJson from "./CardWords";
import SchoolWords from "./SchoolJSON";
import Template from "./TemplateTable";
import React, { useEffect, useState } from "react";
import axios from "axios";

function TableWords() {
  const [english, setEnglish] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://6536ba1dbb226bb85dd28e56.mockapi.io/api/diploma_blog/english_game`
      )
      .then((response) => {
        setEnglish(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <tbody>
      {english.map((word) => (
        <Template
          key={word.id}
          tags={word.tags}
          english={word.english}
          transcription={word.transcription}
          russian={word.russian}
          name={"Edit"}
        ></Template>
      ))}
    </tbody>
  );

  //let CardWords = JSON.parse(SchoolWords);
  //console.log(CardWords);
  // return (
  //   <tbody>
  //     {/* {" "}
  //     {CardWords.map((word, id) => (
  //       <Template
  //         key={id}
  //         tags={word.tags}
  //         english={word.english}
  //         transcription={word.transcription}
  //         russian={word.russian}
  //         name={"Edit"}
  //       ></Template>
  //     ))} */}
  //   </tbody>
  // );
}

export default TableWords;
