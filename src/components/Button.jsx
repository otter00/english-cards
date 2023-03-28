import React from 'react';
import './styles/styles.scss';
import './styles/button.scss';

function Button(props) {
    return <button className="button button__previous">{props.name}</button>;
}

export default Button;