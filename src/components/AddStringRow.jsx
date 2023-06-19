import React, {useState, useContext} from 'react';
import './styles/styles.scss';
import styled from 'styled-components';
import AddStringRow from './styles/AddStringRow.module.scss';
import TableButton from './styles/TableButton.module.scss';
import cn from 'classnames';
import Button from './Button';
import { WordsContext } from '../context/ContextProvider';

const RowDiv = styled.div`
    margin: auto;
`

let buttonAdd = cn([`${TableButton.buttonAdd}`, ` ${TableButton.generalButton}`]);

export default function StringRow() {
    const [lvl, setLevel] = useState('lvl'); //initialize the state
    const [en, setEnglish] = useState('en');
    const [tr, setTranscription] = useState('tr');
    const [ru, setRussian] = useState('ru');

    const { addWord } = useContext(WordsContext); //call for function from context

    const handleButtonAddClick = () => {
        // Выводим введенные данные в консоль
        // console.log('Level:', lvl);
        // console.log('English:', en);
        // console.log('Transcription:', tr);
        // console.log('Russian:', ru);

        //create an object contains input values
        //then call for func and send it an object to add new word into API
        const newWord = {
            tags: lvl,
            english: en,
            transcription: tr,
            russian: ru
          };

        addWord(newWord);
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
                        //initialize the state
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

                        <td>
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