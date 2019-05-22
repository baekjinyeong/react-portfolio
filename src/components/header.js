import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <header id="header" className="header">
        <h1 className="App-logo">
          <svg width="82" height="82" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle cx="41" cy="41" r="40" stroke="black" fill="transparent" stroke-width="1" />
          </svg>
        </h1>
      </header>
    );
  }
}

export default Header;