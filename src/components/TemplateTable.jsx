import React,  { useState } from 'react';
import Button from './Button';
import ButtonStyle from './styles/Button.module.scss'
import TableAppearance from './styles/Table.module.scss'
import TableButton from './styles/TableButton.module.scss'
import cn from 'classnames';

let buttonEdit = cn([`${TableButton.buttonEdit}`, ` ${TableButton.generalButton}`]);
let buttonSave = cn([`${TableButton.buttonSave}`, ` ${TableButton.generalButton}`]);
let buttonDelete = cn([`${TableButton.buttonDelete}`, ` ${TableButton.generalButton}`]);

export default function Template(props) {
    const [isEditing, setIsEditing] = useState(false);
    const [englishWord, setEnglishWord] = useState(props.english);

    const handleEdit = () => {
        setIsEditing(!isEditing);
    };
    
    const handleCancelEdit = () => {
        setIsEditing(!isEditing);
        setEnglishWord(props.english)
    };
        return (
        <tr>
            <td><span className={TableAppearance.center__flex}>{props.level}</span></td>
            <td>
              {isEditing ? (
                    <input
                      type="text"
                      value={englishWord}
                    />
                  ) : (
                    <span className={TableAppearance.center__flex}>{props.english}</span>
                  )}
            </td>
            <td><span className={TableAppearance.center__flex}>{props.russian}</span></td>
            <td>
                <div className={TableAppearance.center__flex}>
                {isEditing ? (
                    <>
                      <Button className={buttonSave} name={'Save'}/>
                      <Button className={buttonDelete} name={'Delete'} />
                      <Button className={buttonEdit} name={'Cancel'} function={handleCancelEdit}/>
                    </>
                  ) : (
                    <Button className={buttonEdit} name={'Edit'} function={handleEdit} />
                  )}
                </div>
                {/* {
                    newWord.map((item)=>{
                        return <input value={item}></input>
                    })
                } */}
            </td>
        </tr>
    );
}