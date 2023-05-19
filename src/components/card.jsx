import React, {useEffect, useState} from 'react';
import cn from 'classnames';
import './styles/styles.scss';

import ButtonStyle from './styles/Button.module.scss';
import Button from './Button';
import TableButton from './styles/TableButton.module.scss';
import CardWordsJson from './CardWords';

let CardWords = JSON.parse(CardWordsJson);
console.log(CardWords); //array

const buttonTranslate = cn([`${TableButton.buttonTranslate}`, `${ButtonStyle.button}`]);

export default function Card(props) {
    const [isTranslate, setIsTranslate] = useState(false);
    const {word, onClickTranslate} = props;
    // const {counttransled} = useSelector(state => state.counttransled)
    const {level, topic, english, russian, id} = word;

    const onClickButton = () => {
        onClickTranslate();
        setIsTranslate(!isTranslate);
    };

    useEffect(() => {
        setIsTranslate(false);
    }, [id]);
    
    return (        
        <div className="cards__container">

        <section className="card__content">
            <div className="card__word">
                <span className="card__level">{level}</span>
                <span className="card__topic">{topic}</span>
                <span className="bold__word">{english}</span>
                {isTranslate && (
                        <span onClick={onClickButton} className="word__translation">{russian}</span>
                )} 
                {!isTranslate && (
                    <span className="word__translation-button">
                    <Button className={buttonTranslate} name={'Translate'} onClick={onClickButton} />
                    </span>
                )}
            </div>
        </section>

        <div className={ButtonStyle.buttons__container}>
        <div onClick={props.previousCard}>
            <Button className={ButtonStyle.button} name={'Previous'}/>
        </div>
        
        <div onClick={props.nextCard}>
        <Button className={ButtonStyle.button} name={'Next'}/>
        </div>
        </div>
    </div>
    )
}