import React, {useState} from 'react';
import cn from 'classnames';
import './styles/styles.scss';

import Button from './Button';
import TableButton from './styles/TableButton.module.scss'

const buttonTranslate = cn([`${TableButton.buttonTranslate}`, ` ${TableButton.generalButton}`]);

export default function Card(props) {
    const [isTranslate, setIsTranslate] = useState(false);
    //const [englishWord, setEnglishWord] = useState(props.english);

    const handleTranslate = () => {
        setIsTranslate(!isTranslate);
    };
    
    // const handleCancelTranslate = () => {
    //     setIsTranslate(!isTranslate);
    //     setEnglishWord('word translation')
    // };

    console.log(props.translation)

    return (
        <div className="cards__container">

        <section className="card__content">
            <div className="card-img__container">
                <img src={props.url} alt="card__img" />
            </div>

            <div className="card__word">
                <span className="bold__word">{props.bold}</span>

                {isTranslate ? (
                        <span className="word__translation">{props.translation}</span>
                  ) : (
                    <span className="word__translation-button">
                    <Button className={buttonTranslate} name={'Translate'} function={handleTranslate} />
                    </span>
                  )}

            </div>

        </section>

    </div>
    );
}