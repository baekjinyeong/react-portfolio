import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import PageScroll from './components/Pagescroll'
import './App.css';

class App extends Component {
  render() {
    return(
      <Fragment>
        <Header/>
        <PageScroll/>
      </Fragment>
    );
  }
}

export default App;
