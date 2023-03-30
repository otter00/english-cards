import React from 'react';
import './styles/styles.scss';
import './styles/Button.scss';

function Button(props) {
    return <button className="button">{props.name}</button>;
}

export default Button;