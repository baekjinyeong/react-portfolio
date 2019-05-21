import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <Fragment>
        <header id="header">
          <h1>header logo</h1>
          <nav id="gnb">
            <ul>
              <li><NavLink exact to="/">HOME</NavLink></li>
              <li><NavLink exact to="/about">ABOUT</NavLink></li>
              <li><NavLink exact to="/works">WORKS</NavLink></li>
              <li><NavLink exact to="/contact">CONTACT</NavLink></li>
            </ul>
          </nav>
        </header>
       </Fragment>
    );
  }
}

export default Header;