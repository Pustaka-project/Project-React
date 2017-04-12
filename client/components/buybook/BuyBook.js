import React, { Component } from 'react';
import classnames from 'classnames';
import map from 'lodash';
import { Link } from 'react-router';
import jwt from 'jsonwebtoken';

import validateInput from '../../validations/signUpvalidations';
import TextFieldGroup from '../common/TextFieldGroup';
import setAuthToken from '../../utils/setAuthToken';
import { buyBookRequest } from '../../actions/authActions';
import BuyBookForm from './BuyBookForm';

export default class BuyBook extends Component {

     constructor(props) {
        super(props);
        this.buyBookRequestHandler = this.buyBookRequestHandler.bind(this);
    }

    buyBookRequestHandler(data) {
        console.log("data ", data);
        buyBookRequest(data);
    }

    render() {
        return (
            <div className="row full-height">
                <div className="col-md-4 col-md-offset-4 full-height">
                    {/*Returning the child component "addBookRequestHandler" in AddbookForm
                    which returns with all User entered data*/}
                    <BuyBookForm buyBookRequestHandler={this.buyBookRequestHandler} />
                </div>
            </div>

        );
    }
}

