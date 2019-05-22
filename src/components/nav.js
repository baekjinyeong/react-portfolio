import React, { Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeClass: false
    }
  }

  handleToggle = () => {
    const { activeClass } = this.state;
    this.setState({
      activeClass: !activeClass
    })
  };

  handleMove = () => {
    this.handleToggle();
  }

  render() {
    const { handleToggle, handleMove } = this;
    let wrapperClass = ['gnb-wrapper '];

    if (this.state.activeClass) {
      wrapperClass.push('active');
    }

    return (
      <div className={wrapperClass.join('')}>
        <button className='gnb-button' onClick={handleToggle}><span>버튼열기</span></button>
        <nav id="gnb">
          <ul className="gnb-list">
            <li className="gnb-item"><button onClick={handleMove}>HOME</button></li>
            <li className="gnb-item"><button onClick={handleMove}>ABOUT</button></li>
            <li className="gnb-item"><button onClick={handleMove}>WORKS</button></li>
            <li className="gnb-item"><button onClick={handleMove}>CONTACT</button></li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Navigation;