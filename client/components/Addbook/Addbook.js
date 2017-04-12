import React, { Component } from 'react';
import AddbookForm from './AddbookForm';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { addBookRequest } from '../../actions/authActions';
// import {LargeLogo} from '../common/Logos';

class Addbook extends Component {
    constructor(props) {
        super(props);
        this.addBookRequestHandler = this.addBookRequestHandler.bind(this);
    }

    addBookRequestHandler(data) {
        console.log("data ", data);
        addBookRequest(data);
        console.log("response data", data);
    }

    render() {
        return (
            <div className="row full-height">
                <div className="col-md-4 col-md-offset-4 full-height">
                    {/*Returning the child component "addBookRequestHandler" in AddbookForm
                    which returns with all User entered data*/}
                    <AddbookForm addBookRequestHandler={this.addBookRequestHandler} />
                </div>
            </div>

        );
    }
}
export default Addbook;
