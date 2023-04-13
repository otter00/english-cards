import React from 'react';
import cn from 'classnames';
import './App.css';
import './components/styles/styles.scss';

import ButtonStyle from './components/styles/Button.module.scss';
import Table from './components/styles/Table.module.scss';
import TableButtons from './components/styles/TableButton.module.scss';
// import JSON
import Words from './components/Words';
// import components
import Card from './components/Card';
import Button from './components/Button';
import Header from './components/Header';
import TableWords from './components/TableWords';

class App extends React.Component {
  render () {
    console.log(Words);
    return (
      <div className="body">

        <Header/>

      {/* <Aside /> */}
      <Card />

      <table className={Table.table}>
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
    </table>

      </div>
    )
  }
}

export default App;
