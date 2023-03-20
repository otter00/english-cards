import React from 'react';
import './App.css';
import './components/styles.css';
import Card from './components/card';
import Aside from './components/aside-menu';

import photo from './assets/WIc8yNAljtk.jpg';

class App extends React.Component {
  render () {
    return (
      <div className="body">

      <Aside />
      <Card url={photo} />

      </div>
    )
  }
}

export default App;
