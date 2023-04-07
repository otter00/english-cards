import React, {useState} from 'react';
import cn from 'classnames';
import './styles/styles.scss';

import ButtonStyle from './styles/Button.module.scss';
import Button from './Button';
import TableButton from './styles/TableButton.module.scss';
import CardWords from './CardWords';

const generalBtn = cn([`${ButtonStyle.button}`]);

const buttonTranslate = cn([`${TableButton.buttonTranslate}`, ` ${TableButton.generalButton}`]);

export default function Card(props) {
    const [isTranslate, setIsTranslate] = useState(false);

    const handleTranslate = () => {
        setIsTranslate(!isTranslate);
    };

    return (
        CardWords.map((card) => 
        
        <div className="cards__container">

        <Button className={generalBtn} name={'Previous'} />

        <section className="card__content">
            <div className="card-img__container">
                <img src={props.url} alt="card__img" />
            </div>

            <div className="card__word">
                <span className="bold__word">{card.bold}</span>

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