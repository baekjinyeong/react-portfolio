// import React, {Component} from 'react';

// function App(props) {
//   return(
//     <PageScroller style={{display: 'flex', flexDirection: 'column'}}>
//       <PageNav />
//       <PageIndicator />
//       <Page style={{backgroundColor: 'blue', display: 'flex', alignItems: 'center', justifyContent: 'center'}} navTitle='Num 1'>
//         <h1 className='page-number'>1</h1>
//       </Page>
//       <Page className='page' style={{backgroundColor: 'green'}} navTitle='Num 2'>
//         <h1 className='page-number'>2</h1>
//       </Page>
//       <Page style={{backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center'}} navTitle='Num 3'>
//         <h1 className='page-number'>3</h1>
//       </Page>
//     </PageScroller>
//   );
// }

// class PageScroller extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       scrollPos: 0,
//       pageIndex: 0,
//       scrollAgain: true
//     };

//     this.pages = 0;
//     this.scrollLocker = () => {};
//   }

//   componentDidMount = () => {
//     window.addEventListener('scroll', this.handleScroll);
//   }

//   componentWillUnmount = () => {
//     window.removeEventListener('scroll', this.handleScroll);
//   }

//   handleScroll = () => {
//     const scrollPos = this.state.scrollPos;
//     let pageIndex = this.state.pageIndex;
//     const winHeight = window.innerHeight;

//     if(this.state.scrollAgain) {
//       if((document.body.getBoundingClientRect()).top > scrollPos) {
//         // handle scroll up
//         if(pageIndex - 1 >= 0) {
//           //pageIndex--;
//           this.scroll(winHeight, pageIndex - 1);
//         }
//       } else {
//         // handle scroll down
//         if(pageIndex + 1 <= this.pages - 1) {
//           //pageIndex++;
//           this.scroll(winHeight, pageIndex + 1);
//         }
//       }
//     } else {
//       // scroll to current position if scrolling is disabled
//       window.scrollTo(0, pageIndex * winHeight);
//     }
//   }

//   scroll = (winHeight, pageIndex) => {
//     window.scrollTo(0, winHeight * pageIndex);

//     this.scrollLocker = setTimeout(() => {
//       this.setState({scrollAgain: true});
//     }, 1000);

//     this.setState({
//       scrollPos: (document.body.getBoundingClientRect()).top,
//       pageIndex: pageIndex,
//       scrollAgain: false
//     });
//   }

//   goToPage = (index) => {
//     this.scroll(window.innerHeight, index);
//   }

//   renderChildren = () => {
//     let childElements = [];
//     let pageIndicator = undefined;
//     let pageNav = undefined;
//     let navButtons = [];
//     let pageCount = 0;

//     Children.map(this.props.children, (child, i) => {
//       if(child.type === Page) {

//         if(child.props.navTitle) {
//           navButtons.push({
//             title: child.props.navTitle,
//             index: pageCount
//           });
//         }

//         pageCount++;
//         childElements.push(child);
//       } else if(child.type === PageIndicator) {
//         pageIndicator = child;
//       } else if(child.type === PageNav) {
//         pageNav = child;
//       }
//     });

//     this.pages = pageCount;

//     if(pageIndicator) {
//       childElements.push(
//         cloneElement(pageIndicator, {
//           pageCount: this.pages,
//           activePage: this.state.pageIndex,
//           goToPage: this.goToPage
//         }));
//     }

//     if(pageNav) {
//       childElements.push(
//         cloneElement(pageNav, {
//           goToPage: this.goToPage,
//           navButtons: navButtons
//         }));
//     }

//     return childElements;
//   }

//   render() {
//     return(
//       <div {...this.props}>
//         {this.renderChildren()}
//       </div>
//     );
//   }
// }

// function Page(props) {
//   let {style, children, ...otherProps} = {...props};
//   let {height, width, ...cleanedStyle} = {...style};

//   let pageStyle = {
//     height: '100vh',
//     width: '100vw',
//     ...cleanedStyle
//   }

//   return(
//     <div style={pageStyle} {...otherProps}>
//       {children}
//     </div>
//   );
// }

// class PageIndicator extends Component {

//   renderIndicators = () => {
//     let count = this.props.pageCount;
//     let indicators = [];

//     for(let i = 0; i < count; i++) {
//       indicators.push(
//         <PageIndicatorButton
//           active={i === this.props.activePage}
//           pageIndex={i}
//           goToPage={this.props.goToPage}
//           key={i}
//         />
//       );
//     }

//     return indicators;
//   }

//   render() {
//     let pageIndicatorStyle = {
//       ...this.props.style,
//       height: '100vh',
//       position: 'fixed',
//       display: 'flex',
//       flexDirection: 'column',
//       justifyContent: 'center'
//     };

//     return(
//       <div style={pageIndicatorStyle}>
//         {this.renderIndicators()}
//       </div>
//     );
//   }
// }

// class PageIndicatorButton extends Component {
//   goToPage = () => {
//     this.props.goToPage(this.props.pageIndex);
//   }

//   render() {
//     let indicatorStyle = {
//       height: '8px',
//       width: this.props.active ? '20px' : '8px',
//       margin: '10px',
//       borderRadius: '4px',
//       backgroundColor: 'white',
//       transition: 'width 500ms ease'
//     };

//     return(
//       <div style={indicatorStyle} onClick={this.goToPage}>
//       </div>
//     );
//   }
// }

// class PageNav extends Component {
//   renderButtons = () => {
//     let buttons = [];
//     this.props.navButtons.map((buttonInfo, i) => {
//       buttons.push(
//         <div
//           className='page-nav-button'
//           onClick={() => this.props.goToPage(buttonInfo.index)}
//           key={i}
//         >
//           {buttonInfo.title}
//         </div>
//       );
//     });

//     return buttons;
//   }

//   render() {
//     return(
//       <div className='page-nav'>
//         {this.renderButtons()}
//       </div>
//     );
//   }
// }