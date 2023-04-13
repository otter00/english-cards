import React, {useState} from 'react';
import cn from 'classnames';
import './styles/styles.scss';

import ButtonStyle from './styles/Button.module.scss';
import Button from './Button';
import TableButton from './styles/TableButton.module.scss';
import CardWordsJson from './CardWords';

let CardWords = JSON.parse(CardWordsJson);
console.log(CardWords); //array

const generalBtn = cn([`${ButtonStyle.button}`]);

const buttonTranslate = cn([`${TableButton.buttonTranslate}`, ` ${TableButton.generalButton}`]);

export default function Card(props) {
    const [cardIndex, setCardIndex] = useState(0);
    const [isTranslate, setIsTranslate] = useState(false);

    const handleTranslate = () => {
        setIsTranslate(!isTranslate);
    };

    return (
        CardWords.map((card) => 
        
        <div className="cards__container">

        {/* <Button className={generalBtn} name={'Previous'} /> */}

        <section className="card__content">
            <div className="card__word">
                <span className="card__level">{card.level}</span>
                <span className="card__topic">{card.topic}</span>
                <span className="bold__word">{card.english}</span>
                {isTranslate ? (
                        <span className="word__translation">{card.translation}</span>
                  ) : (
                    <span className="word__translation-button">
                    <Button className={buttonTranslate} name={'Translate'} function={handleTranslate} />
                    </span>
                  )}
            </div>
        </section>

        <Button className={ButtonStyle.button} name={'Next'}/>
    </div>)
    );
}