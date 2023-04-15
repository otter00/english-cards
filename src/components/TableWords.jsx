import CardWordsJson from './CardWords';
import Template from './TemplateTable';
import React, { Component } from 'react';

function TableWords() {
    let CardWords = JSON.parse(CardWordsJson);
    console.log(CardWords);
    return (
        <tbody> {
            CardWords.map((word, id) =>
                <Template
                key={id}
                level={word.level}
                english={word.english}
                russian={word.russian}

                name={'Edit'}
                ></Template>
            )
        }
        </tbody>
    )
}

export default TableWords;