import React, { Component } from 'react';
import Nav from './nav';

class PageScroll extends Component {
  constructor(props) {
    super(props)

    this.state = {
      scrollPos: 0,
      activeIndex: 0,
      windowHeight: props.height
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  // window height
  componentWillMount(){
    this.setState({
      height: window.innerHeight + 'px'
    });
  }

  // scroll event
  handleScroll = (e) => {
    let scrollTop = e.srcElement.body.scrollTop,
        itemTranslate = Math.min(0, scrollTop/3 - 60);

    // const scrollPos = this.state.scrollPos;
    // let pageIndex = this.state.activeIndex;
    // const winHeigith = window.innerHeight;

    this.setState({
      transform: itemTranslate
    })
    console.log(scrollTop, itemTranslate, this.state.height)
  }

  render() {
    return(
      <div className="page-scroll-wrapper">
        <Nav/>
        <section className="slide1"></section>
        <section className="slide2"></section>
        <section className="slide3"></section>
        <section className="slide4"></section>
      </div>
    )
  }
}
export default PageScroll;