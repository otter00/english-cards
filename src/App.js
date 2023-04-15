import React from 'react';
import './App.css';
import './components/styles/styles.scss';
import Table from './components/styles/Table.module.scss';
// import components
import CardSlider from './components/CardSlider';
import Header from './components/Header';
import TableWords from './components/TableWords';

class App extends React.Component {
  render () {
    return (
      <div className="body">

      <Header/>
      <CardSlider />

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
