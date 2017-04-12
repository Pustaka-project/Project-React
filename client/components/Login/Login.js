import React,{Component} from 'react';
import LoginForm from './LoginForm';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {userLoginRequest} from '../../actions/authActions';
// import {LargeLogo} from '../common/Logos';
//This is Login Page which gets the data from Login Form.
class Login extends Component {
    render() {
      const {userLoginRequest} = this.props;
        return (
            <div className="row full-height">
              <div className="col-md-4 col-md-offset-4 full-height">
               {/*Gets the whole data from LoginForm's userLoginRequest function*/}
                <LoginForm userLoginRequest={userLoginRequest}/>
              </div>
            </div>
        );
    }
}

Login.propTypes = {
  userLoginRequest:React.PropTypes.func.isRequired,
}

export default connect(null, { userLoginRequest })(Login)
