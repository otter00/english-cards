import React from 'react';

import './App.css';
import './components/styles/styles.scss';
import './components/styles/Button.scss';
import Table from './components/styles/Table.module.scss'

import Card from './components/Card';
import Button from './components/Button';
import Aside from './components/Aside-menu';
import TableWords from './components/TableWords';

import photo from './assets/WIc8yNAljtk.jpg';

// import JSON
import Words from './components/Words';

class App extends React.Component {
  render () {
    console.log(Words);
    return (
      <div className="body">

      <Aside />
      <Button name={'Previous'} />
      {/* <Card url={photo} /> */}

      <table className={Table.table}>
      <thead>
        <tr>
        <th>Level</th>
        <th>English</th>
        <th>Russian</th>
        <th>Options</th>
        </tr>
      </thead>
      <TableWords>
      </TableWords>
    </table>

      <Button name={'Next'}/>

      </div>
    )
  }
}

export default App;
