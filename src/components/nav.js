import React, { Fragment, Component } from 'react';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeClass: false
    }
  }

  onClickToggle = () => {
    const { activeClass } = this.state;
    this.setState({
      activeClass: !activeClass
    })
  };

  render() {
    const { onClickToggle } = this;
    let navClass = ['gnb-wrapper '];
    let gnbButtonClass = ['gnb-button '];

    if (this.state.activeClass) {
      navClass.push('active')
      gnbButtonClass.push('active')
    }

    return (
      <Fragment>
        <button className={gnbButtonClass.join('')} onClick={onClickToggle}><span>버튼열기</span></button>
        <nav id="gnb" className={navClass.join('')}>
          <ul className="gnb-list">
            <li className="gnb-item"><button>HOME</button></li>
            <li className="gnb-item"><button>ABOUT</button></li>
            <li className="gnb-item"><button>WORKS</button></li>
            <li className="gnb-item"><button>CONTACT</button></li>
          </ul>
        </nav>
      </Fragment>
    )
  }
}

export default Navigation;