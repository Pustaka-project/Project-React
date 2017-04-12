import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

/*This contains all the necessary fuctions to 
validate the Sell Book form fields*/
export default function validateInput(data) {

    let errors = {};
    if (Validator.isEmpty(data.categoryId)) {
        errors.categoryId = "Please Enter Your Book Category";
    }

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Please Enter correct Title';
    }

    if (Validator.isEmpty(data.desc)) {
        errors.desc = 'Description should be 20-30 words';
    }

    if (Validator.isEmpty(data.price)) {
        errors.price = 'Please Enter price in Rs.-';
    }

    if (Validator.isEmpty(data.edition)) {
        errors.edition = 'Please Enter Edition';
    }

    return { errors, isValid: isEmpty(errors) }

}