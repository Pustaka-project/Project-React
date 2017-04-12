import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

/*This contains all the necessary fuctions to 
validate the Register Page form fields*/
export default function validateInput(data) {

    let errors = {};
    if (Validator.isEmpty(data.firstName)) {
        errors.firstName = "Please Enter firstName";
    }

    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = 'Please Enter lastName';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Please Enter Your Email';
    }

    if (Validator.isEmpty(data.mobile)) {
        errors.mobile = 'Please Enter Mobile Number';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Please Enter Password';
    }

    if (Validator.isEmpty(data.confirmPassword)) {
        errors.confirmPassword = 'Please Enter Confirm Password';
    }

    // if (Validator.isEmail(data.email)) {
    //     errors.email = "Enter Valid Email Address";
    // }

    //   if (Validator.isEmpty(data.mobile)) {
    //      errors.email = "Please Enter Mobile Number";
    //  }

    // if (data.mobile.length != 10) {
    //     errors.email = "Mobile Number should contain 10 digits";
    // }

    //  if (Validator.isEmpty(data.passowrd)) {
    //       errors.passowrd = "Enter Password!";
    //  }

    // if (data.password.length < 6 || data.password.length > 15) {
    //     errors.password = "Password should be between 6 and 15 characters long";
    // }

    // if (Validator.isEmpty(data.confirmPassword)) {
    //     errors.confirmPassword = "Enter Confirm Password!";
    // }

    return { errors, isValid: isEmpty(errors) }

}