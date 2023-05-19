import React, {useState, useRef} from 'react';
import './styles/styles.scss';
// import components
import Card from './Card';
import FinalCard from './EndOfCard';
import JsonWords from "./CardWords";

let words = JSON.parse(JsonWords);

export default function CardSlider(props) {
    const [cardIndex, setCardIndex] = useState(0);
    const [idxWordsTranslated, setIdxWordsTranslated] = useState([]);
    const elemFocused = useRef(null);

    function nextCard() {
        elemFocused.current.focus();
        setCardIndex(cardIndex + 1);
    }

    function previousCard() {
        setCardIndex(cardIndex - 1);
    }

    function startSlider() {
        setCardIndex(0);
        setIdxWordsTranslated([]);
    }

    function onClickTranslate() {
        setIdxWordsTranslated((prev) => {
            if (!idxWordsTranslated.includes(cardIndex)) {
                return [
                    ...prev,
                    cardIndex
                ]
            }
            return prev;
        })
    }

    const countTranslated = idxWordsTranslated.length;

    if(words) {
        return(
            <>
                {cardIndex < words.length && (
                    <>
                        <Card 
                        previousCard={previousCard} 
                        onClickTranslate={onClickTranslate} 
                        word={words[cardIndex]} 
                        nextCard={nextCard}
                        elemFocused={elemFocused} />
                        {cardIndex + 1} / {words.length}
                    </>
                    )}
                {cardIndex === words.length && (
                    <>
                        <FinalCard 
                        startSlider={startSlider} 
                        countTranslated={countTranslated}/>
                    </>
                    )}
            </>
        )
    }
    alert("Service is unavailable");
}