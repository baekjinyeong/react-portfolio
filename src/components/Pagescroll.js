import React, { Component, Fragment } from 'react';

// slide page
class SlidePage extends Component {

  render() {
    return (
      <Fragment>
        <section className="slide1">page1</section>
        <section className="slide2">page2</section>
        <section className="slide3">page3</section>
        <section className="slide4">page4</section>
      </Fragment>
    )
  }
}

// pagination
class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageIndex: 1,
      pageActiveIndex: 0,
      pageNumbers: []
    }
  }

  renderPageNumbers = () => {
    const { pageNumbers } = this.state;
    const { pageIndex } = this.props;

    for(let i = 0; i <= pageIndex; i++) {
      pageNumbers.push(
        <PagenationButton
          key = {i}
          pageIndex={i}
          handleActive = '3'
          gotoPage = '3'
        />
      );
    }
    return pageNumbers;
  }

  render() {
    return(
      <div className="pagination">{this.renderPageNumbers()}</div>
    );
  }
}


// pagination button
class PagenationButton extends Component {
  constructor(props) {
    super(props);
    this.targetRef = React.createRef();
  }

  handleClick = () => {
    const targetNod = this.targetRef.current
    targetNod.classList.add('active')
  }

  gotoPage = () => {
    console.log('test')
  }
  render() {
    const { handleClick, targetRef } = this;
    const { activeIndex } = this.props;

    return(
      <span onClick={handleClick} ref={targetRef}>{activeIndex}</span>
    )
  }
}

// page scroll
class PageScroll extends Component {
  constructor(props) {
    super(props)

    this.state = {
      windowHeight: 0,
      activeIndex : 0,
      pageIndex : 3
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
    const { activeIndex, windowHeight, } = this.state;

    if(e.wheelDelta > 0) {
      this.setState({
        windowHeight: window.innerHeight,
        activeIndex: activeIndex - 1
      })
      document.documentElement.scrollTop = windowHeight * activeIndex

    } else {
      this.setState({
        windowHeight: window.innerHeight,
        activeIndex: activeIndex + 1
      })
      document.documentElement.scrollTop = windowHeight * activeIndex
    }
    console.log(this.state.windowHeight, activeIndex, document.documentElement.scrollTop)
  }

  handelActive = () => {
    console.log('active')
  }

  render() {
    const { pageIndex } = this.state;

    return(
      <div className="page-scroll-wrapper">
        <SlidePage/>
        <Pagination pageIndex={pageIndex}/>
      </div>
    )
  }
}
export default PageScroll;