import { useState } from "react";

export default function InputField(props) {
    let { valueWord, onChange, name, onBlur, pattern } = props;
  
    const [valueInput, setValueInput] = useState(valueWord);
    //const [isValid, setIsValid] = useState(true);
    const [error, setError] = useState("");
  
    function ChangeInput(event) {
      setValueInput(event.target.value);
  
      switch (event.target.name) {
        case "english":
          onChange(event);
          if (event.target.value === "") {
            //setIsValid(false);
            setError('Поле не может быть пустым');
          } else {
            setError("");
          }
          break;
        case "russian":
          onChange(event);
          if (event.target.value === "") {
            //setIsValid(false);
            setError('Поле не может быть пустым');
          } else {
            setError("");
          }
          break;
        case "level":
          onChange(event);
          if (event.target.value === "") {
            //setIsValid(false);
            setError('Поле не может быть пустым');
          } else {
            setError("");
          }
          break;
      }
    }
  
    return (
      <>
        <div className="words-item__new">
          {!isValid ? (
            <div className="words-item__notice">{error}</div>
          ) : (
            <div className="words-item__notice">Внесите изменения:</div>
          )}
  
          <input
            onChange={ChangeInput}
            onBlur={onBlur}
            name={name}
            className={`words-item__add ${
              isValid ? "" : "words-item__add-error"
            }`}
            type="text"
            value={valueInput}
            placeholder={valueWord}
            pattern={pattern}
          />
        </div>
      </>
    );
  }
  