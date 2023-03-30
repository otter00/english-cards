import Words from './Words';
import Template from './TemplateTable';
import React, { Component } from 'react';
//import cn from 'classnames';

function TableWords() {
    console.log(Words);
    return (
        <tbody> {
            Words.map((word, id) =>
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