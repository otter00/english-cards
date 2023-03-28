import React from 'react';

import './App.css';
import './components/styles/styles.scss';
import './components/styles/button.scss';

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
      <Card url={photo} />
      <Button name={'Next'}/>

      <div className='table'></div>

      </div>
    )
  }
}

export default App;
