import React, { Component } from 'react';
import Button from './Button';
import TableAppearance from './styles/Table.module.scss'

export default class Template extends React.Component {
    render() {
        const {level, english, russian, options } = this.props;

        return (
        <tr>
            <td>{level}</td>
            <td>{english}</td>
            <td>{russian}</td>
            <td>
                <div className={TableAppearance.td__btns}>
                <Button name={'Edit'}></Button>
            <Button name={'Save'}></Button>
            <Button name={'Delete'}></Button></div>
            </td>
        </tr>
        );
    }
}