import React from 'react';

function Button(props) {
    console.log(props)
      return <button onClick={props.function} className={props.className}>{props.name}</button>;
  }

export default Button;