import React,  { useState, useEffect } from 'react';
import Button from './Button';
import { observer, inject } from "mobx-react";
import TableAppearance from './styles/Table.module.scss'
import TableButton from './styles/TableButton.module.scss'
import cn from 'classnames';

let buttonEdit = cn([`${TableButton.buttonEdit}`, ` ${TableButton.generalButton}`]);
let buttonSave = cn([`${TableButton.buttonSave}`, ` ${TableButton.generalButton}`]);
let buttonCansel = cn([`${TableButton.buttonCansel}`, ` ${TableButton.generalButton}`]);
let buttonDisabled = cn([`${TableButton.generalButton__disabled}`]);
let buttonDelete = cn([`${TableButton.buttonDelete}`, ` ${TableButton.generalButton}`]);

function Template(props) {
    const { english, russian, tags, transcription, id, editWord, deleteWord } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [word, setWord] = useState({english, russian, tags, transcription, id}); // пропсы из TableWords
    const [isEmpty, setIsEmpty] = useState(null);

    // useEffect с зависимостями
    // при изменении любого из этих свойств в props эффект будет вызван
    useEffect(() => {
      setWord({
        english: props.english,
        transcription: props.transcription,
        russian: props.russian,
        tags: props.tags,
      });
    }, [props.english, props.transcription, props.russian, props.tags]);

    const checkInput = () => {
      if (word.english.trim() === '' || 
      word.russian.trim() === '' || 
      word.tags.trim() === '' || 
      word.transcription.trim() === '') {
        setIsEmpty(true);
      } else {
        setIsEmpty(false);
      }
    };

    useEffect(() => {
      checkInput();
    }, [english, russian, tags, transcription]);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };
    
    const handleCancelEdit = () => {
        setWord({ english, russian, tags, transcription });
        setIsEditing(!isEditing);
    };

    // function that saves entered word and checks whether field is empty
    const save = () => {
        if (word.english.trim() === '' || 
        word.russian.trim() === '' || 
        word.tags.trim() === '' ||
        word.transcription.trim() === '') {
          setIsEmpty(true);
          alert(`Please fill all the inputs required`);
        return;
        } else if (!word.russian.match("[а-яА-ЯЁё]")) {
          alert('Please enter a russian word');
          return;
        } else if ((!word.english.match("^[a-zA-Z0-9]+$")) ||(!word.tags.match("^[a-zA-Z0-9]+$")) ) {
          alert('Please enter an english word');
          return;
        }

      setIsEditing(!isEditing);
      // call for function from context to edit word and send it to api
      // here the editFunc calls when we save changes 
      // then we send it id and object 'word'
      // with changes
      editWord(id, word);
      console.log(`Form contains english: ${word.english}, transcription: ${word.transcription}, russian: ${word.russian}, tags: ${word.tags}`)
    }


    // onChange funcs contain target value and set it into appropriate field

    const onChangeLevel = (event) => {
      const value = event.target.value;

      setWord(prevState => ({
        ...prevState,
        tags: value,
      }));
      setIsEmpty(false);
    }

    const onChangeEnglish = (event) => {
      const value = event.target.value;

      setWord(prevState => ({
        ...prevState,
        english: value,
      }));
      setIsEmpty(false);
    }

    const onChangeTranscription = (event) => {
      const value = event.target.value;

      setWord(prevState => ({
        ...prevState,
        transcription: value,
      }));
      setIsEmpty(false);
    }
  
    const onChangeRussian = (event) => {
      const value = event.target.value;

      setWord(prevState => ({
        ...prevState,
        russian: value,
      }));
      setIsEmpty(false);
    }

  // handleDeleteWord вызывает функцию deleteWord с двумя аргументами: id и wordToDelete.
 //id - id удаляемого слова
 // wordToDelete - объект со свойствами english, transcription, russian, tags
    const handleDeleteWord = () => {
      const wordToDelete = {
        english: word.english,
        transcription: word.transcription,
        russian: word.russian,
        tags: word.tags,
      };
      deleteWord(id, wordToDelete);
      window.location.reload();
    }

        return (
        <tr>
            <td>
              {isEditing? (
                    <input
                    onChange={onChangeLevel}
                    type="text"
                    value={word.tags}
                    // check whether field is empty
                    // if true, set the class wth warning frame
                    className={word.tags.trim() === '' ? `${TableAppearance.empty_input}` : ''}
                  />
              ) : ( 
                <span className={TableAppearance.center__flex}>{word.tags}</span>
                )}
              </td>
            <td>
              {isEditing ? (
                    <input
                      onChange={onChangeEnglish}
                      type="text"
                      value={word.english}
                      className={word.english.trim() === '' ? `${TableAppearance.empty_input}` : ''}
                    />
                  ) : (
                    <span className={TableAppearance.center__flex}>{word.english}</span>
                  )}
            </td>
            <td>
            {isEditing ? (
                    <input
                    onChange={onChangeTranscription}
                    type="text"
                    value={word.transcription}
                    className={word.transcription.trim() === '' ? `${TableAppearance.empty_input}` : ''}
                  />
            ) : (
                  <span className={TableAppearance.center__flex}>{word.transcription}</span>
            )}
            </td>
            <td>
            {isEditing ? (
                    <input
                    onChange={onChangeRussian}
                    type="text"
                    value={word.russian}
                    className={word.russian.trim() === '' ? `${TableAppearance.empty_input}` : ''}
                  />
            ) : (
                  <span className={TableAppearance.center__flex}>{word.russian}</span>
            )}
            </td>
            <td>
                <div className={TableAppearance.center__flex}>
                {isEditing ? (
                    <>
                      <Button                   
                      onClick={save} 
                      className={isEmpty ? `${buttonDisabled}` : `${buttonSave}`} 
                      name={'Save'}
                      disabled={isEmpty}/>

                      <Button 
                      className={buttonCansel} 
                      name={'Cancel'} 
                      onClick={handleCancelEdit}/>
                    </>
                  ) : (
                    <>
                    <Button 
                    className={buttonEdit} 
                    name={'Edit'} 
                    onClick={handleEdit} />

                    <Button 
                    className={buttonDelete}
                    name={'Delete'}
                    // handleDeleteWord привязана к событию onClick кнопки
                    onClick={handleDeleteWord} />
                    </>
                  )}
                </div>
            </td>
        </tr>
    );
}

export default inject(({ wordsData }) => ({
  editWord: wordsData.editWord, // Inject the editWord function from the wordsData store
  deleteWord: wordsData.deleteWord, // Inject the deleteWord function from the wordsData store
}))(observer(Template));