// import iconDel from "../../images/iconDel.png";
// import iconSave from "../../images/iconSave.png";

import Input from './InputAdd';
import Button from './Button';
import TableAppearance from './styles/Table.module.scss';
import TableButton from './styles/TableButton.module.scss';
import cn from 'classnames';
import Table from './styles/Table.module.scss';

import { useState, useEffect, useContext } from "react";
import { WordsContext } from '../context/ContextProvider';

let buttonAdd = cn([`${TableButton.buttonAdd}`, ` ${TableButton.generalButton}`]);
let buttonDisabled = cn([`${TableButton.generalButton__disabled}`]);

export default function StringAdd(props) {
  const [isValidInput, setIsValidInput] = useState(true);
  let { english, russian, tags, transcription, id } = props;
  const [word, setWord] = useState({english, russian, tags, transcription}); // пропсы из TableWords

  const [valueEn, setValueEn] = useState("");
  const [valueRu, setValueRu] = useState("");
  const [valueTr, setValueTr] = useState("");
  const [valueSubject, setValueSubject] = useState("");

  const [err, setErr] = useState("");

  const context = useContext(WordsContext);

  const addWord = context.addWord;

  useEffect(() => {
    setWord({
      english: props.english,
      transcription: props.transcription,
      russian: props.russian,
      tags: props.tags,
    });
  }, [props.english, props.transcription, props.russian, props.tags]);

  const handleEn = (event) => {
    setValueEn(event.target.value);
  };

  const handleTr = (event) => {
    setValueTr(event.target.value);
  };

  const handleRu = (event) => {
    setValueRu(event.target.value);
  };

  const handleSubject = (event) => {
    setValueSubject(event.target.value);
  };

  function checkString() {
    if (
      valueEn === "" ||
      valueTr === "" ||
      valueRu === "" ||
      valueSubject === ""
    ) {
      setIsValidInput(false);
    } else if (
      !valueEn.match("^[a-zA-Z0-9]+$") ||
      !valueRu.match("[а-яА-ЯЁё]") ||
      !valueSubject.match("[а-яА-ЯЁё]")
    ) {
      setIsValidInput(false);
    } else setIsValidInput(true);
  }

  useEffect(() => {
    checkString();
  }, [valueEn, valueTr, valueRu, valueSubject]);

  async function save(event) {
    event.preventDefault();
    const form = new FormData(event.target);

    let newWord = {
      english: form.get("english"),
      transcription: form.get("transcription"),
      russian: form.get("russian"),
      tags: form.get("tags"),
    };

    const err = await context.addWord(newWord);
    setErr(err);
    console.log(newWord);

        function delString() {
      setWord({});
    }

    //addWord(newWord);
  }

  return (
    <tr>
      {err}
      <div className={Table.table}>
          <div onSubmit={save} className={TableAppearance.add__body}>
            <Input name="english" valueWord="слово" onChange={handleEn} />
            <Input
              name="transcription"
              valueWord="транскрипция"
              onChange={handleTr}
            />
            <Input name="russian" valueWord="перевод" onChange={handleRu} />
            <Input name="tags" valueWord="тема" onChange={handleSubject} />

            <div className={TableAppearance.word__new__button}>
                <Button    
                disabled={!isValidInput} 
                className={buttonAdd}
                name={'Add'}>
                </Button>
            </div>
          </div>
      </div>
    </tr>
  );
}
