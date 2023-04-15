import React, {useState} from 'react';
import './styles/styles.scss';
// import components
import Card from './Card';
import JsonWords from "./CardWords";

let words = JSON.parse(JsonWords);

export default function CardSlider(props) {
    const [cardIndex, setCardIndex] = useState(0);

    function nextCard() {
        setCardIndex(cardIndex + 1);
    }

        return(
            <>
                {cardIndex < words.length && (
                    <>
                        <Card {...words[cardIndex]} nextCard={nextCard} />
                        {cardIndex + 1} / {words.length}
                    </>
                    )}
            </>
        )
}