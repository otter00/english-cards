import React from 'react';
import { useState } from 'react';
import Button from './Button';
import ButtonStyle from './styles/Button.module.scss'
import TableAppearance from './styles/Table.module.scss'
import TableButton from './styles/TableButton.module.scss'
import cn from 'classnames';

let buttonEdit = cn([`${TableButton.buttonEdit}`, `${TableButton.generalButton}`]);
let buttonSave = cn([`${TableButton.buttonSave}`, `${TableButton.generalButton}`]);
let buttonDelete = cn([`${TableButton.buttonDelete}`, `${TableButton.generalButton}`]);

export default function Template(props) {

        const [newWord, setNewWord] = useState(['']);

        return (
        <tr>
            <td><span className={TableAppearance.center__flex}>{props.level}</span></td>
            <td><span className={TableAppearance.center__flex}>{props.english}</span></td>
            <td><span className={TableAppearance.center__flex}>{props.russian}</span></td>
            <td>
                <div className={TableAppearance.center__flex}>
                    <Button className={buttonEdit} name={'Edit'} 
                    // onClick={() => {
                    //     setNewWord([...newWord, ''])}} 
                    />
                    <Button className={buttonSave} name={'Save'}/>
                    <Button className={buttonDelete} name={'Delete'}/>
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