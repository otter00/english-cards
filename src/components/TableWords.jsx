import CardWordsJson from './CardWords';
import SchoolWords from './SchoolJSON';
import Template from './TemplateTable';
import React from 'react';

function TableWords() {
    let CardWords = JSON.parse(SchoolWords);
    console.log(CardWords);
    return (
        <tbody> {
            CardWords.map((word, id) =>
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

export default TableWords;