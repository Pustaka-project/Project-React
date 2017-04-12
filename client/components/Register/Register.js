import React,{Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm'; 
import {userSignUpRequest} from '../../actions/authActions';
// import {LargeLogo} from '../common/Logos';
/*  This is Login Page which gets the data from RegisterForm. */
class Register extends Component {

    constructor(props){
        super(props);
        //Binding this userSignUpRequestHandler data to this.userSignUpRequestHandler.
        this.userSignUpRequestHandler = this.userSignUpRequestHandler.bind(this);
    }

    userSignUpRequestHandler(data) {
        console.log("data " ,data); //returns data. 
        userSignUpRequest(data);
    }

    render() {
        return (
            <div className="row full-height">
              <div className="col-md-4 col-md-offset-4 full-height">
                 {/*Gets the whole data from RegisterForm's userSignUpRequest function*/}
                <RegisterForm userSignUpRequestHandler={this.userSignUpRequestHandler}/>
              </div>
            </div>
             
        );
    }

}
export default Register;