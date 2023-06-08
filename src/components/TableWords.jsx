import CardWordsJson from './CardWords';
import SchoolWords from './SchoolJSON';
import Template from './TemplateTable';
import React from 'react';

import { useContext, useState } from "react";
import { WordsContext } from "../context/ContextProvider";

export default function TableWords() {
    const context = useContext(WordsContext);
    const words = context.words;

    let CardWords = JSON.parse(SchoolWords);
    //console.log(CardWords);
    return (
        <tbody> {
            words.map((word, id) =>
                <Template
                key={id}
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