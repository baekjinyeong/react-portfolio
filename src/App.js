import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import PageScroll from './components/Pagescroll'
import Nav from './components/nav'
import './App.css';
import './css/test.less';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      speed: 0,
      height: props.height
    }
  }

  render() {
    return(
      <Fragment>
        <Header/>
        <Nav/>
        <PageScroll>
        </PageScroll>
      </Fragment>
    );
  }
}

export default App;
