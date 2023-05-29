import React,  { useState } from 'react';
import Button from './Button';
import TableAppearance from './styles/Table.module.scss'
import TableButton from './styles/TableButton.module.scss'
import cn from 'classnames';

let buttonEdit = cn([`${TableButton.buttonEdit}`, ` ${TableButton.generalButton}`]);
let buttonSave = cn([`${TableButton.buttonSave}`, ` ${TableButton.generalButton}`]);
let buttonCansel = cn([`${TableButton.buttonCansel}`, ` ${TableButton.generalButton}`]);
//let buttonDisabled = 

export default function Template(props) {
    let { english, russian, level } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [word, setWord] = useState({english, russian, level});

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };
    
    const handleCancelEdit = () => {
        setWord({ english, russian, level });
        setIsEditing(!isEditing);
    };
  
    // function that saves entered word and checks whether field is empty
    const save = () => {
        if (word.english.trim() === '' || 
        word.russian.trim() === '' || 
        word.level.trim() === '') {
          alert('Please enter a value');
        return;
        } else if (!word.russian.match("[а-яА-ЯЁё]")) {
          alert('Please enter a russian word');
          return;
        } else if (!word.english.match("^[a-zA-Z0-9]+$")) {
          alert('Please enter an english word');
          return;
        }

      setIsEditing(!isEditing);
    }


    // onChange funcs contain target value and set it into appropriate field

    const onChangeLevel = (event) => {
      const value = event.target.value;

      setWord({
        english: word.english,
        russian: word.russian,
        level: value,
      });
    }

    const onChangeEnglish = (event) => {
      const value = event.target.value;

      setWord({
        english: value,
        russian: word.russian,
        level: word.level,
      });
    }
  
    const onChangeRussian = (event) => {
      const value = event.target.value;

      setWord({
        english: word.english,
        russian: value,
        level: word.level,
      });
    }

        return (
        <tr>
            <td>
              {isEditing? (
                    <input
                    onChange={onChangeLevel}
                    type="text"
                    value={word.level}
                    // check whether field is empty
                    // if true, set the class wth warning frame
                    className={word.level.trim() === '' ? `${TableAppearance.empty_input}` : ''}
                  />
              ) : ( 
                <span className={TableAppearance.center__flex}>{word.level}</span>
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
                      className={(word.english.trim() === '' || 
                      word.russian.trim() === '' || 
                      word.level.trim() === '') ? `${TableButton.generalButton__disabled}` : buttonSave} 
                      onClick={save} 
                      name={'Save'}
                      disabled={word.english.trim() === '' || 
                      word.russian.trim() === '' || 
                      word.level.trim() === ''}/>

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

/*
import React,  { useState, useEffect } from 'react';
import Button from './Button';
import TableAppearance from './styles/Table.module.scss'
import TableButton from './styles/TableButton.module.scss'
import cn from 'classnames';

let buttonEdit = cn([`${TableButton.buttonEdit}`, ` ${TableButton.generalButton}`]);
let buttonSave = cn([`${TableButton.buttonSave}`, ` ${TableButton.generalButton}`]);
let buttonCansel = cn([`${TableButton.buttonCansel}`, ` ${TableButton.generalButton}`]);
//let buttonDisabled = 

export default function Template(props) {
    let { english, russian, level } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [word, setWord] = useState({english, russian, level});
    const [isEmpty, setIsEmpty] = useState(true);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };
    
    const handleCancelEdit = () => {
        setWord({ english, russian, level });
        setIsEditing(!isEditing);
    };
  
    // function that saves entered word
    const save = () => {
      setIsEditing(!isEditing);
    }

    // function that checks whether field is empty
    function checkField() {
      if (word.english.trim() === '' || 
        word.russian.trim() === '' || 
        word.level.trim() === ''
      ) {
        alert('Please enter a value');
        setIsEmpty(false);
      } else setIsEmpty(true);
    }

    // set the effect onto the inputs
    useEffect(() => {
      checkField();
    }, [word.english, word.russian, word.level]);

    // onChange funcs contain target value and set it into appropriate field

    const onChangeLevel = (event) => {
      const value = event.target.value;

      setWord({
        english: word.english,
        russian: word.russian,
        level: value,
      });
    }

    const onChangeEnglish = (event) => {
      const value = event.target.value;

      setWord({
        english: value,
        russian: word.russian,
        level: word.level,
      });
    }
  
    const onChangeRussian = (event) => {
      const value = event.target.value;

      setWord({
        english: word.english,
        russian: value,
        level: word.level,
      });
    }

        return (
        <tr>
            <td>
              {isEditing? (
                    <input
                    onChange={onChangeLevel}
                    type="text"
                    value={word.level}
                    // check whether field is empty
                    // if true, set the class wth warning frame
                    className={word.level.trim() === '' ? `${TableAppearance.empty_input}` : ''}
                  />
              ) : ( 
                <span className={TableAppearance.center__flex}>{word.level}</span>
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
                      className={(word.english.trim() === '' || 
                      word.russian.trim() === '' || 
                      word.level.trim() === '') ? `${TableButton.generalButton__disabled}` : buttonSave} 
                      
                      onClick={save} 
                      name={'Save'}
                      disabled={word.english.trim() === '' || 
                      word.russian.trim() === '' || 
                      word.level.trim() === ''}/>

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
*/