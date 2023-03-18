import React from 'react';
import './styles.css';

function Card(props) {
    return (
        <div className="cards__container">
        <button className="button button__previous">P</button>

        <section className="card__content">
            <div className="card-img__container">
                <img src={props.url} alt="card__img" />
            </div>

            <div className="card__word">
                <span className="bold__word">Bold word</span>
                <span className="word__translation">Word translation</span>
            </div>
        </section>

        <button className="button button__next">N</button>
    </div>
    );
}

export default Card;