import React, { Component } from 'react';
import Button from './Button';
import TableAppearance from './styles/Table.module.scss'
import TableButton from './styles/TableButton.module.scss'
import cn from 'classnames';

let buttonEdit = cn([`${TableButton.buttonEdit}`, `${TableButton.generalButton}`]);
let buttonSave = cn([`${TableButton.buttonSave}`, `${TableButton.generalButton}`]);
let buttonDelete = cn([`${TableButton.buttonDelete}`, `${TableButton.generalButton}`]);

export default class Template extends React.Component {
    render() {
        const {level, english, russian, options } = this.props;

        return (
        <tr>
            <td><span className={TableAppearance.center__flex}>{level}</span></td>
            <td><span className={TableAppearance.center__flex}>{english}</span></td>
            <td><span className={TableAppearance.center__flex}>{russian}</span></td>
            <td>
                <div className={TableAppearance.center__flex}>
                    <input className={buttonEdit} type='button' value={'Edit'}/>
                    <input className={buttonSave} type='button' value={'Save'}/>
                    <input className={buttonDelete} type='button' value={'Delete'}/>
                </div>
            </td>
        </tr>
        );
    }
}