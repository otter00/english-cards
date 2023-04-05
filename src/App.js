import React from 'react';
import cn from 'classnames';
import './App.css';
import './components/styles/styles.scss';

import ButtonStyle from './components/styles/Button.module.scss';
import Table from './components/styles/Table.module.scss';
import TableButtons from './components/styles/TableButton.module.scss';
// import JSON
import Words from './components/Words';

import Card from './components/Card';
import Button from './components/Button';
import Aside from './components/Aside-menu';
import TableWords from './components/TableWords';

import photo from './assets/WIc8yNAljtk.jpg';

const generalBtn = cn([`${ButtonStyle.button}`]);
class App extends React.Component {
  render () {
    console.log(Words);
    return (
      <div className="body">

      <Aside />
      <Button className={generalBtn} name={'Previous'} />

      <Card url={photo}/>

      {/* <table className={Table.table}>
      <thead className={Table.thead}>
        <tr>
        <th>Level</th>
        <th>English</th>
        <th>Russian</th>
        <th>Options</th>
        </tr>
      </thead>
      <TableWords>
      </TableWords>
    </table> */}

      <Button className={ButtonStyle.button} name={'Next'}/>

      </div>
    )
  }
}

export default App;
