import React, { Component } from 'react';
import classnames from 'classnames';
import map from 'lodash';
import { Link } from 'react-router';
import jwt from 'jsonwebtoken';
import validateInput from '../../validations/signUpvalidations';
import TextFieldGroup from '../common/TextFieldGroup';
import setAuthToken from '../../utils/setAuthToken';
import Login from '../Login/Login';

export default class RegisterForm extends Component {

    constructor(props) {
        super(props);
        /*We will be using the state to control the input This will 
        ensure that the state will always hold the lastest values.*/
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            mobile: '',
            password: '',
            confirmPassword: '',
            errors: {},
            isLoading: false,
            firstTimeFormSubmit: false
        }
        // binds the changes to this.onChange
        this.onChange = this.onChange.bind(this);
        //binds the changes to onSubmit
        this.onSubmit = this.onSubmit.bind(this);
    }

    //onChange of value. set the particular value to that form name. 
    onChange(event) {
        this.setState({ [event.target.name]: event.target.value }, function () {
            if (this.state.firstTimeFormSubmit) {
                this.isValid();
            }
        });
    }

    isValid() {
        //deconstruct the props
        const { errors, isValid } = validateInput(this.state);
        //if(!isValid) {
        this.setState({ errors });
        //}
        return isValid;
    }

    onSubmit(event) {
        event.preventDefault();
        this.setState({ firstTimeFormSubmit: true })
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.userSignUpRequestHandler(this.state);
        }
    }


    render() {
        const {
            errors,
            firstName,
            lastName,
            email,
            mobile,
            password,
            confirmPassword,
            isLoading
        } = this.state;
        return (
            /*form with necessary details and Submit button.*/
            <form className="p20 user-entry-forms login-form" onSubmit={this.onSubmit}>
                <h2 className="mt0 mb20 text-center">Create Pustaka Account</h2>
                <div className="row mt30">
                    <div className="login-submit">
                        <h5>Already Registered!</h5>
                        <div className="form-group">
                            <Link to="/login"><button className="btn btn-lg btn-primary">
                                LOGIN</button></Link>
                        </div>
                    </div>
                    <div className="row mb30">
                        <div className="col-xs-12">
                            <hr />
                        </div>
                    </div>
                    {errors.form && <div className="alert alert-danger">{errors.form}</div>}
                    <div className="row mb10">
                        <div className="col-xs-12">
                            <TextFieldGroup
                                error={errors.firstName}
                                label="FirstName"
                                onChange={this.onChange}
                                value={firstName}
                                field="firstName"
                            />
                        </div>
                    </div>

                    <div className="row mb10">
                        <div className="col-xs-12">
                            <TextFieldGroup
                                error={errors.lastName}
                                label="LastName"
                                onChange={this.onChange}
                                value={lastName}
                                field="lastName"
                            />
                        </div>
                    </div>

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

                    <div className="row mb10">
                        <div className="col-xs-12">
                            <TextFieldGroup
                                error={errors.mobile}
                                label="Phone Number"
                                onChange={this.onChange}
                                value={mobile}
                                field="mobile"
                            />
                        </div>
                    </div>

                    <div className="row mb10">
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

                    <div className="row mb10">
                        <div className="col-xs-12">
                            <TextFieldGroup
                                error={errors.confirmPassword}
                                label="Confirm Password"
                                onChange={this.onChange}
                                value={confirmPassword}
                                field="confirmPassword"
                                type="password"

                            />
                        </div>
                    </div>

                    <div className="row mt30">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="form-group">
                                <button
                                    disabled={this.state.isLoading} //Button will be disabled still it's pressed
                                    className="btn btn-lg btn-primary full-width">
                                    SUBMIT
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        );

    }

}