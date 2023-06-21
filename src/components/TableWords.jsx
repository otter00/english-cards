import CardWordsJson from './CardWords';
import SchoolWords from './SchoolJSON';
import Template from './TemplateTable';
import React from 'react';
import styled from 'styled-components';

import { useContext, useState, useEffect } from "react";
//import { WordsContext } from "../context/ContextProvider";

import { observer, inject } from "mobx-react";

const Loading = styled.div`
color: white;
display: flex;
justify-content: center;
text-transform: uppercase;
font-size: 54px;
font-weight: 600;
`

function TableWords({ words }) {
    //const context = useContext(WordsContext);
    //const words = context.words;

    // JSON with words from school

    //let CardWords = JSON.parse(SchoolWords);
    //console.log(CardWords);

    // here we use words got from context
    if (!words) {
        return <Loading>Loading...</Loading>;
      } else if (words) {
        console.log(words);
      }
    
    return (
        <tbody> {
            words.map((word, id) =>
                <Template
                // key & id we get from JSON as id & tags_json
                key={id} // id
                id={word.id} // tags_json
                tags={word.tags}
                english={word.english}
                transcription={word.transcription}
                russian={word.russian}

                name={'Edit'}
                ></Template>
            )
        }
        </tbody>
    )
}

export default inject(({ wordsData }) => {
    const { words } = wordsData;
  
    // useEffect(() => {
    //   loadData();
    // });
  
    return {
      words,
    };
  })(observer(TableWords));