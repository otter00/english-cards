import React from 'react';
import './styles/styles.scss';
import styled from 'styled-components';
import AddStringRow from './styles/AddStringRow.module.scss';
import TableButton from './styles/TableButton.module.scss';
import cn from 'classnames';
import Button from './Button';

const RowDiv = styled.div`
    margin: 2vh;
`

let buttonAdd = cn([`${TableButton.buttonAdd}`, ` ${TableButton.generalButton}`]);
let buttonDelete = cn([`${TableButton.buttonDelete}`, ` ${TableButton.generalButton}`]);

export default function StringRow(props) {
    return (
        <RowDiv>
            <h1 className={AddStringRow.title}>Add new word</h1>
            <table className={AddStringRow.table}>
                <thead className={AddStringRow.thead}>
                    <tr>
                    <th>Level</th>
                    <th>English</th>
                    <th>Transcription</th>
                    <th>Russian</th>
                    <th>Options</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td><input
                        type="text"></input>
                        </td>

                        <td><input 
                        type="text"></input>
                        </td>

                        <td><input 
                        type="text"></input>
                        </td>

                        <td><input 
                        type="text"></input>
                        </td>

                        <td  >
                        <div className={AddStringRow.add__container}>
                            <Button 
                                className={buttonAdd} 
                                name={'Add'}  />
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </RowDiv>
    )
}