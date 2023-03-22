import React from 'react';
import './styles/styles.scss';

function Card(props) {
    return (
        <div className="cards__container">

        <section className="card__content">
            <div className="card-img__container">
                <img src={props.url} alt="card__img" />
            </div>

            <div className="card__word">
                <span className="bold__word">Bold word</span>
                <span className="word__translation">Word translation</span>
            </div>
        </section>

    </div>
    );
}

export default Card;