import React, { Component } from 'react';
import Button from './Button';
import TableAppearance from './styles/Table.module.scss'

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
                    <Button name={'Edit'}></Button>
                    <Button name={'Save'}></Button>
                    <Button name={'Delete'}></Button>
                </div>
            </td>
        </tr>
        );
    }
}