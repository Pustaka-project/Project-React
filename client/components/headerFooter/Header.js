import React, { Component } from 'react';
import ProductImage from '../headerFooter/ProductImage.js';
import { Route, IndexRoute } from 'react-router';
import { Link } from 'react-router';
import Login from '../Login/Login.js';
import Register from '../Register/Register.js';
//This contains Header components which is reusale.
class Header extends Component {
  render() {
    return (
      /*whole page is divided in to a whole container
      which can be divided in to further divsions using <div> tag
      */
      <div className="container-fluid">
        <div className="header">
          {/*contains Logo element*/}
          <div className="logo">
            <ProductImage />
          </div>
          <div className="navbar">
            <h1>PUSTAKA</h1>
            <p>>>>Sharing Knowledge</p>
          </div>
         {/*contains Buttons which are placed to right*/}
          <div className="login-register">
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav navbar-right">
                <li className="active"><a><span className="glyphicon glyphicon-home"></span>Home</a></li>
                <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span>&nbsp;Login</Link></li>
                <li><Link to="/register"><span className="glyphicon glyphicon-book"></span>&nbsp;Register</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;