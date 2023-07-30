import React,  { useState, useEffect } from 'react';
import Button from './Button';
import TableAppearance from './styles/Table.module.scss'
import TableButton from './styles/TableButton.module.scss'
import cn from 'classnames';

let buttonEdit = cn([`${TableButton.buttonEdit}`, ` ${TableButton.generalButton}`]);
let buttonSave = cn([`${TableButton.buttonSave}`, ` ${TableButton.generalButton}`]);
let buttonCansel = cn([`${TableButton.buttonCansel}`, ` ${TableButton.generalButton}`]);
let buttonDisabled = cn([`${TableButton.generalButton__disabled}`]);

export default function Template(props) {
    let { english, russian, tags, transcription } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [word, setWord] = useState({english, russian, tags, transcription});
    const [isEmpty, setIsEmpty] = useState(null);

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
                    <Button 
                    className={buttonEdit} 
                    name={'Edit'} 
                    onClick={handleEdit} />
                  )}
                </div>
            </td>
        </tr>
    );
}