import React, { Component, Fragment } from 'react';

// slide page
class SlidePage extends Component {
  render() {
    return (
      <Fragment>
        <section className="slide1"></section>
        <section className="slide2"></section>
        <section className="slide3"></section>
        <section className="slide4"></section>
      </Fragment>
    )
  }
}

// pagination
class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageActiveIndex: 0,
      pageNumbers: []
    }
  }
  render() {
    const { pageNumbers } = this.state;

    for(let i = 0; i <= 3; i++) {
      pageNumbers.push(i);
    }
    let renderPageNumbers = pageNumbers.map(number => {
      return (
        <span key={number}>{number}</span>
      )
    })
    return(
      <div className="pagination">{renderPageNumbers}</div>
    );
  }
}


// page scroll
class PageScroll extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeIndex: 0,
      windowHeight: 0
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() { // 컴포넌트가 만들어지고 첫 렌더링을 다 마친 후 실행되는 메소드
    // window.addEventListener('mousewheel', this.handleScroll);
  }

  componentWillUnmount() { // 컴포넌트가 DOM 에서 사라진 후 실행되는 메소드
    // window.removeEventListener('mousewheel', this.handleScroll);
  };

  // scroll event
  handleScroll = (e) => {
    if(e.wheelDelta > 0) {
      this.setState({
        windowHeight: window.innerHeight,
        activeIndex: this.state.activeIndex - 1
      })
      document.documentElement.scrollTop = this.state.windowHeight * this.state.activeIndex

    } else {
      this.setState({
        windowHeight: window.innerHeight,
        activeIndex: this.state.activeIndex + 1
      })
      document.documentElement.scrollTop = this.state.windowHeight * this.state.activeIndex
    }
    console.log(this.state.windowHeight, this.state.activeIndex, document.documentElement.scrollTop)
  }

  render() {
    return(
      <div className="page-scroll-wrapper">
        <SlidePage/>
        <Pagination/>
      </div>
    )
  }
}
export default PageScroll;