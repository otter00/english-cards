import React from 'react';

import './App.css';
import './components/styles/styles.scss';
import './components/styles/button.scss';

import Card from './components/Card';
import Button from './components/Button';
import Aside from './components/Aside-menu';

import photo from './assets/WIc8yNAljtk.jpg';

const texts = [{
  prev: 'Prev',
  next: 'Next'
}];

class App extends React.Component {
  render () {
    return (
      <div className="body">

      <Aside />
      <Button />
      <Card url={photo} />
      <Button />

      </div>
    )
  }
}

export default App;
