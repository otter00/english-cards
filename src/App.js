import React from 'react';

import logo from './logo.svg';
import './App.css';

import './components/styles.css';
import Card from './components/card';
import Aside from './components/aside-menu';

class App extends React.Component {
  render () {
    return (
      <div className="body">

      <Aside></Aside>
      <Card></Card>

      </div>
    )
  }
}

export default App;
