import React, {useState} from 'react';
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

export default function StringRow(props) {
    const [lvl, setLevel] = useState('lvl');
    const [en, setEnglish] = useState('en');
    const [tr, setTranscription] = useState('tr');
    const [ru, setRussian] = useState('ru');

    const handleButtonAddClick = () => {
        // Выводим введенные данные в консоль
        console.log('Level:', lvl);
        console.log('English:', en);
        console.log('Transcription:', tr);
        console.log('Russian:', ru);
      };

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
                        type="text"
                        name='lvl'
                        value={lvl}
                        onChange={(e) => setLevel(e.target.value)}></input>
                        </td>

                        <td><input 
                        type="text"
                        name='en'
                        value={en}
                        onChange={(e) => setEnglish(e.target.value)}></input>
                        </td>

                        <td><input 
                        type="text"
                        name='tr'
                        value={tr}
                        onChange={(e) => setTranscription(e.target.value)}></input>
                        </td>

                        <td><input 
                        type="text"
                        name='ru'
                        value={ru}
                        onChange={(e) => setRussian(e.target.value)}></input>
                        </td>

                        <td  >
                        <div className={AddStringRow.add__container}>
                            <Button 
                                className={buttonAdd} 
                                name={'Add'}  
                                onClick={handleButtonAddClick}/>
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </RowDiv>
    )
}