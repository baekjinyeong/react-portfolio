import React, { Component } from 'react';
class Header extends Component {
  render() {
    return(
      <header id="header" className="header">
        <h1 className="App-logo">
          <svg width="82" height="82" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 82 82">
            <rect x="0" y="0" width="60" height="60" fill="transparent" stroke="#e03131" strokeWidth="3"/>
          </svg>
          <span class="logo-text">JINYEONG</span>
        </h1>
      </header>
    );
  }
}

export default Header;