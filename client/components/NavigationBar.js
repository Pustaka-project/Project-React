import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';
import Header from './headerFooter/Header';

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    //logout will be binded with value that is passed whhen submitted.
    this.logout = this.logout.bind(this);
  }

  /* when the logout button is pressed, it calls the logout API in authActions.js
     it will call the backend API,, which returns empty string, It clears first 
     User-Name, it then clear the User's Id from curent session.
    */
  logout(e) {
    e.preventDefault();
    let user_id = {
      id: this.props.auth.user.user_id
    }
    this.props.logout(user_id).then(
      () => {
        this.context.router.push('/welcome');
      },
      ({ data }) => this.setState({ errors: data, isLoading: false })
    );
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    const user = this.props.auth.user;
    console.log("user is ", user);

    /*This is UserLinks- which will be called when user is LoggedIn sucessfully */
    const userLinks = (
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="navbar-header">
            <Link className="navbar-brand">Pustaka - Sharing Knowledge</Link>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav navbar-right">
              {/*if user is not Authenticated Notification-bar will have button general buttons 
             that will be showing to link Button to Welcome and Login page*/}
              {!isAuthenticated && <li>
                <Link
                  to={{
                    pathname: `/`,
                  }}
                >Home</Link>
              </li>}
              {/*if user is Authenticated profile page will be opened with User Name
              with dropdrowns for Dashboard and Logout*/}
              {isAuthenticated && <li className="pull-right dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{user.first_name} {user.last_name} <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/" onClick={this.logout}>Logout</Link></li>
                  {/*<li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">One more separated link</a></li>*/}
                </ul>
              </li>}
            </ul>
          </div>
        </div>
      </nav>
    );

    const guestLinks = (
      <div></div>
    );
    console.log('nav path is ', this.props.pathname);
    return (
      <div>
        {/*Navigation bar will not be shown for Welcome, Login And Register Pages*/}
        {(this.props.pathname != '/' && this.props.pathname != '/login' && this.props.pathname != '/register') ? userLinks : guestLinks}
      </div>
    );
  }
}

NavigationBar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

NavigationBar.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  }
}
export default connect(mapStateToProps, { logout })(NavigationBar);
