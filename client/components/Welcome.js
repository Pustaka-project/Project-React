import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import Body from './welcomebody/Body.js';
import Footer from './headerFooter/Footer.js';
import Header from './headerFooter/Header.js';

/*This is the first Page or Welcome Page, 
Components from all Header and Footers and Body are used here.*/
export default class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="header-background">
                    <Header />
                </div>
                <br />
                <Body />
                <Footer />
            </div>

        );
    }
}