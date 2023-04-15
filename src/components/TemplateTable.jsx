import React,  { useState } from 'react';
import Button from './Button';
import ButtonStyle from './styles/Button.module.scss'
import TableAppearance from './styles/Table.module.scss'
import TableButton from './styles/TableButton.module.scss'
import cn from 'classnames';

let buttonEdit = cn([`${TableButton.buttonEdit}`, ` ${TableButton.generalButton}`]);
let buttonSave = cn([`${TableButton.buttonSave}`, ` ${TableButton.generalButton}`]);
let buttonCansel = cn([`${TableButton.buttonCansel}`, ` ${TableButton.generalButton}`]);

export default function Template(props) {
    let { english, russian } = props;
    const [isEditing, setIsEditing] = useState(false);
    const [word, setWord] = useState({english, russian});

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };
    
    const handleCancelEdit = () => {
        setWord({ english, russian });
        setIsEditing(!isEditing);
    };
  
    const save = () => {
      setIsEditing(!isEditing);
    }

    const onChangeEnglish = (event) => {
      setWord({
        english: event.target.value,
        russian: word.russian,
      });
    }
  
    const onChangeRussian = (event) => {
      setWord({
        english: word.english,
        russian: event.target.value,
      });
    }

        return (
        <tr>
            <td><span className={TableAppearance.center__flex}>{props.level}</span></td>
            <td>
              {isEditing ? (
                    <input
                      onChange={onChangeEnglish}
                      type="text"
                      value={word.english}
                    />
                  ) : (
                    <span className={TableAppearance.center__flex}>{english}</span>
                  )}
            </td>
            <td>
            {isEditing ? (
                    <input
                    onChange={onChangeRussian}
                    type="text"
                    value={word.russian}
                  />
            ) : (
                  <span className={TableAppearance.center__flex}>{russian}</span>
            )}
            </td>
            <td>
                <div className={TableAppearance.center__flex}>
                {isEditing ? (
                    <>
                      <Button className={buttonSave} function={save} name={'Save'}/>
                      <Button className={buttonCansel} name={'Cancel'} function={handleCancelEdit}/>
                    </>
                  ) : (
                    <Button className={buttonEdit} name={'Edit'} function={handleEdit} />
                  )}
                </div>
            </td>
        </tr>
    );
}