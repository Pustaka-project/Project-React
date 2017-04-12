import React, { Component } from 'react';
import classnames from 'classnames';
import map from 'lodash';
import { Link } from 'react-router';
import jwt from 'jsonwebtoken';
import validateInput from '../../validations/loginValidations';
import TextFieldGroup from '../common/TextFieldGroup';
import setAuthToken from '../../utils/setAuthToken';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    /*We will be using the state to control the input. 
    This will ensure that the state will always hold the lastest values.*/
    this.state = {
      email: '',
      password: '',
      errors: {},
      isLoading: false,
      firstTimeFormSubmit: false
    }

    this.onChange = this.onChange.bind(this);//bind(this) is needed here, otherwise, this will point to the event
    this.onSubmit = this.onSubmit.bind(this);

  }
  /*to save te changes and append the entered value into given names in form, the name will
   be updated with new value and checks for firstTimeFormSubmit, if this is true  checks for 
   validation.
  */
  onChange(event) {
    this.setState({ [event.target.name]: event.target.value }, function () {
      if (this.state.firstTimeFormSubmit) {
        this.isValid();
      }
    });
  }

  //method to check the validity of the form
  isValid() {
    //deconstruct the props
    const { errors, isValid } = validateInput(this.state);
    //if(!isValid) {
    this.setState({ errors });
    //}
    return isValid;
  }

  //onSubmit the all the value entered  
  onSubmit(event) {
    event.preventDefault();
    this.setState({ firstTimeFormSubmit: true })
    if (this.isValid()) 
    {
      //it will check for errors and shows if any in errors:{}. 
      this.setState({ errors: {}, isLoading: true });
      //this.context.router.push('/home');
      this.props.userLoginRequest(this.state).then(
        (res) => {
          console.log('response to login is ', res.data);
          //If there is error no data will be returned,
          if (res.data.error == true) {
            this.setState({ errors: { "form": res.data.message }, isLoading: false })
          }
          /*the data will be returned. It generates a token for 
          representing the user-details and page goes to "Home"(dashBoard) page*/
          else {
            let responseData = res.data.response;
            if (responseData.token) {
              const jwtToken = responseData.token;
              const decodedToken = jwt.decode(jwtToken);
              const user = decodedToken.user_details;
             // alert("Login sucessfull");
              this.context.router.push('/home');
            }
          }
        },
      );
    }
  }

  render() {
    const { errors, email, password, isLoading } = this.state;
    return (
      <form className="p20 user-entry-forms login-form" onSubmit={this.onSubmit}>
        <h2 className="mt0 mb20 text-center">Login</h2>
        <div className="row mt30">

          <div className="row mb30">
            <div className="col-xs-12">
              <hr />
            </div>
          </div>
          {errors.form && <div className="alert alert-danger">{errors.form}</div>}

          {/*Forms with Label, to check error, value entered in to that TextArea.*/}
          <div className="row mb10">
            <div className="col-xs-12">
              <TextFieldGroup
                error={errors.email}
                label="Email address"
                onChange={this.onChange}
                value={email}
                field="email"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <TextFieldGroup
                error={errors.password}
                label="Password"
                onChange={this.onChange}
                value={password}
                field="password"
                type="password"
              />
            </div>
          </div>
          {/* <Link to="/forgotpassword" className="text-center full-width block mb20 link-secondary">Forgot Password?</Link> */}
          <div className="row mb10">
            <div className="col-xs-12">
              <hr />
            </div>
          </div>
          <div className="row mt30">
            <div className="col-md-6 col-md-offset-3">
              <div className="form-group">
                <button disabled={this.state.isLoading} className="btn btn-lg btn-primary full-width">
                  Login
                      </button>
              </div>
              <div className="login-submit">
                <h5>Not Registered!</h5>
                <div className="form-group">
                  <Link to="/register"><button className="btn btn-lg btn-primary">
                    REGISTER</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

//It's a good practice to have propTypes for components. It becomes easy to track bugs where the developer
//doesn't pass all the required props.
LoginForm.propTypes = {
  userLoginRequest: React.PropTypes.func.isRequired,
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LoginForm;
