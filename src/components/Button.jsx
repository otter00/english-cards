import React from 'react';

function Button(props) {
    return <button isClicked={true} className={props.className}>{props.name}</button>;
}

export default Button;