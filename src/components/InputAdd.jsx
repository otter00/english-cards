import { useState } from "react";
import TableAppearance from './styles/Table.module.scss';

export default function Input(props) {
  let { valueWord, onChange, name, onBlur, pattern } = props;

  const [valueInput, setValueInput] = useState(valueWord);
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState("");

  function ChangeInput(event) {
    const inputValue = event.target.value;
    setValueInput(inputValue);

    let isValid = true;
    let error = null;

    switch (event.target.name) {
      case "english":
        if (!inputValue.trim()) {
          isValid = false;
          error = "Заполните поле!";
        } else if (!/^[a-zA-Z0-9]+$/.test(inputValue)) {
          isValid = false;
          error = "Только латиница!";
        }
        break;
      case "russian":
        if (!inputValue.trim()) {
          isValid = false;
          error = "Заполните поле!";
        } else if (!/[а-яА-ЯЁё]/.test(inputValue)) {
          isValid = false;
          error = "Только кириллица!";
        }
        break;
      case "transcription":
        if (!inputValue.trim()) {
          isValid = false;
          error = "Заполните поле!";
        }
        break;
      case "tags":
        if (!inputValue.trim()) {
          isValid = false;
          error = "Заполните поле!";
        } else if (!/[а-яА-ЯЁё]/.test(inputValue)) {
          isValid = false;
          error = "Только кириллица!";
        }
        break;
    }

    setIsValid(isValid);
    setError(error);

    onChange({
      target: {
        name: event.target.name,
        value: inputValue,
      },
    });
  }

  return (
    <>
      <div className={TableAppearance.word__new}>
        {!isValid ? (
          <div className={TableAppearance.add__input}>{error}</div>
        ) : (
          <div className={TableAppearance.add__input}>input here:</div>
        )}

        <input
          onChange={ChangeInput}
          onBlur={onBlur}
          name={name}
          className={`${TableAppearance.word__add} ${
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
