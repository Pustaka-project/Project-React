import React, { Component } from 'react';
import ToastsList from './components/toasts/ToastsList';
import NavigationBar from './components/NavigationBar';
import ModalContainer from './components/common/ModalContainer';
// import SignUpPage from './components/register';

export default class App extends Component {
  // componentWillReceiveProps() {
  //   window.previousLocation = this.props.location;
  //   console.log("previous location is " + window.previousLocation.pathname);
  // }
  componentWillReceiveProps(nextProps) {
    // if we changed routes...
    if ((


      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    )) {
      // save the old children
      this.props.location = this.props.children
    }
  }



  render() {
    let { location } = this.props
    let isModal = (
      location.state &&
      location.state.modal &&
      this.previousChildren
    )

    return (
      <div className="container site-container full-height">
        <NavigationBar pathname={this.props.location.pathname} />
        <ToastsList />
        {/*<SignUpPage/>*/}
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}
