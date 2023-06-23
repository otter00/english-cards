import React from 'react';
import './App.css';
import './components/styles/styles.scss';
import Table from './components/styles/Table.module.scss';
import HomePageStyles from './components/styles/HomePage.module.scss';
// import components
import CardSlider from './components/CardSlider';
import Header from './components/Header';
import TableWords from './components/TableWords';
import Home from './components/Home';
//import { ContextProvider } from './context/ContextProvider';
import { Provider } from "mobx-react";
import { inject, observer } from 'mobx-react';
import store from "./components/store/store";
import AddStringRow from './components/AddStringRow';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

class App extends React.Component {
  render () {
    return (
      // компоненты страницы из Routes будут доступны внутри ContextProvider через children
      // внутри ContextProvider children используются для отображения и обработки дочерних компонентов
    <Provider {...store}>
    <Router>
      <div className="body">

      <Header />

    <Routes>
      <Route path="/table" element={<TableWordsList />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>

      </div>
    </Router>
    </Provider>
    )
  }
}

function NoMatch() {
  return (
    <a href="https://pets.byspotify.com/404">
      <h1 className={HomePageStyles.nofound}>No match, unfortunately...</h1>
    </a>
  );
}

function HomePage() {
  return <Home />
}

function TableWordsList() {
  return (
    <>
    <AddStringRow/>
  <table className={Table.table}>
  <thead className={Table.thead}>
    <tr>
    <th>Level</th>
    <th>English</th>
    <th>Transcription</th>
    <th>Russian</th>
    <th>Options</th>
    </tr>
  </thead>
  <TableWords>
  </TableWords>
</table>
</>)
}

function Learn() {
  return <CardSlider />
}

export default App;

inject(["store"])(observer(App));