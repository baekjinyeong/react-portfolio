import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/header'
import { Home, About, Works, Contact } from './pages';
import './App.css';

class App extends Component {
  render() {
    return(
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/works" component={Works}/>
        <Route path="/contact" component={Contact}/>
      </div>
    );
  }
}

export default App;
