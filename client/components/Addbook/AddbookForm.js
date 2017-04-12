import React, { Component } from 'react';
import classnames from 'classnames';
import map from 'lodash';
import { Link } from 'react-router';
import jwt from 'jsonwebtoken';
import validateInput from '../../validations/sellBookValidations';
import TextFieldGroup from '../common/TextFieldGroup';
import setAuthToken from '../../utils/setAuthToken';

export default class AddbookForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryId: '',
            title: '',
            desc: '',
            price: '',
            edition: '',
            errors: {},
            isLoading: false,
            firstTimeFormSubmit: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value }, function () {
            if (this.state.firstTimeFormSubmit) {
                this.isValid();
            }
        });
    }


    handleChange(event) {
        this.setState({ categoryId: event.target.value });
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
            // this.context.router.push('/home'); uncomment the below code when the API
            // integration starts
            this.props.addBookRequestHandler(this.state);
        }
    }

    render() {
        const {
            errors,
            categoryId,
            title,
            desc,
            price,
            edition,
            isLoading
        } = this.state;
        return (
            <form className="p20 user-entry-forms login-form" onSubmit={this.onSubmit}>
                <h2 className="mt0 mb20 text-center">Add Book Details</h2>
                <div className="row mb30">
                    <div className="col-xs-12">
                        <hr />
                    </div>
                </div>
                {errors.form && <div className="alert alert-danger">{errors.form}</div>}

                <div className="row mb10">
                    <div className="col-xs-12">
                        Pick your Book Category:
                            <select value={this.value} onChange={this.handleChange}>
                            <option value="1">Java</option>
                            <option value="2">C & C++</option>
                            <option value="3">Angular JS</option>
                            <option value="4">React JS</option>
                            <option value="5">Python</option>
                            <option value="6">pHp</option>
                            <option value="7">MySQL</option>
                            <option value="8">.NET</option>
                            <option value="9">Others</option>
                        </select>
                    </div>
                </div>

                <div className="row mb10">
                    <div className="col-xs-12">
                        <TextFieldGroup
                            error={errors.title}
                            label="Book title"
                            onChange={this.onChange}
                            value={title}
                            field="title"
                        />
                    </div>
                </div>

                <div className="row mb10">
                    <div className="col-xs-12">
                        <TextFieldGroup
                            error={errors.desc}
                            label="Book Description"
                            onChange={this.onChange}
                            value={desc}
                            field="desc"
                        />
                    </div>
                </div>


                <div className="row mb10">
                    <div className="col-xs-12">
                        <TextFieldGroup
                            error={errors.price}
                            label="Book Price"
                            onChange={this.onChange}
                            value={price}
                            field="price"
                        />
                    </div>
                </div>


                <div className="row mb10">
                    <div className="col-xs-12">
                        <TextFieldGroup
                            error={errors.edition}
                            label="Book Edition"
                            onChange={this.onChange}
                            value={edition}
                            field="edition"
                        />
                    </div>
                </div>

                <div className="row mt30">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="form-group">
                            <button
                                disabled={this.state.isLoading}
                                className="btn btn-lg btn-primary full-width">
                                POST
                            </button>
                        </div>
                    </div>
                </div>
            </form>

        );

    }

}

/*this.handleChange = this.handleChange.bind(this);


    handleChange(event) {
        this.setState({ categoryId: event.target.value });
    }

 Pick your Book Category:
                            <select value={this.value} onChange={this.handleChange}>
                            <option value="1">Java</option>
                            <option value="2">C & C++</option>
                            <option value="3">Angular JS</option>
                            <option value="4">React JS</option>
                            <option value="5">Python</option>
                            <option value="6">pHp</option>
                            <option value="7">MySQL</option>
                            <option value="8">.NET</option>
                            <option value="9">Others</option>
                        </select>*/