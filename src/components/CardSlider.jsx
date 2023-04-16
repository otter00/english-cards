import React, {useState} from 'react';
import './styles/styles.scss';
// import components
import Card from './Card';
import FinalCard from './EndOfCard';
import JsonWords from "./CardWords";

let words = JSON.parse(JsonWords);

export default function CardSlider(props) {
    const [cardIndex, setCardIndex] = useState(0);

    function nextCard() {
        setCardIndex(cardIndex + 1);
    }

    function previousCard() {
        setCardIndex(cardIndex - 1);
    }

    if(words) {
        return(
            <>
                {cardIndex < words.length && (
                    <>
                        <Card previousCard={previousCard} {...words[cardIndex]} nextCard={nextCard} />
                        {cardIndex + 1} / {words.length}
                    </>
                    )}
                {cardIndex === words.length && (
                    <>
                        <FinalCard previousCard={previousCard}/>
                    </>
                    )}
            </>
        )
    }
    alert("Service is unavailable");
}