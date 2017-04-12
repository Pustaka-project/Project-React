import React, { Component } from 'react';
import classnames from 'classnames';
import map from 'lodash';
import { Link } from 'react-router';
import jwt from 'jsonwebtoken';
import validateInput from '../../validations/sellBookValidations';
import TextFieldGroup from '../common/TextFieldGroup';
import setAuthToken from '../../utils/setAuthToken';
import BuyBook from './BuyBook';


export default class buybookForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            booknumber: '1',
            email:''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    handleChange(event) {
        this.setState({ booknumber: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        this.props.buyBookRequestHandler(this.state);
    }

     onChange(event) {
        this.setState({ [event.target.name]: event.target.value }
        );
    }



    render() {
        const {
            booknumber,
            email
        } = this.state;
        return (
            <div>
            <form className="p20 user-entry-forms login-form" onSubmit={this.onSubmit}>
                <h2 className="mt0 mb20 text-center">BuyBook</h2>
                <div className="row mb30">
                    <div className="col-xs-12">
                        <hr />
                    </div>
                </div>


                <div className="row mb10">
                    <div className="col-xs-12">
                        <TextFieldGroup

                            label="booknumber"
                            onChange={this.onChange}
                            value={booknumber}
                            field="booknumber"
                        />
                    </div>
                </div>
                 <div className="row mb10">
                    <div className="col-xs-12">
                        <TextFieldGroup

                            label="conform your email "
                            onChange={this.onChange}
                            value={email}
                            field="email"
                        />
                    </div>
                </div>


                 <div className="row mt30">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="form-group">
                            <button
                                
                                className="btn btn-lg btn-primary full-width">
                                Get 
                            </button>
                        </div>
                    </div>
                </div>

            </form>

</div>


        );
    
}
}