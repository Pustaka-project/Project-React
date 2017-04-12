import React, { Component } from 'react';
import ReactDOM from 'react';
//This class contains Logo Image  resuable Component
class ProductImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'url': 'https://thumb7.shutterstock.com/display_pic_with_logo/2567083/299085131/stock-vector-template-logo-for-the-library-or-bookstore-four-books-combined-into-cube-299085131.jpg',
            'name': 'Pustaka logo..',
        }
    }
    render() {
        return (
            /*returns the current state of Image this.state.url */
            <img src={this.state.url} alt={name} className="logo"/>
        );
    }
}
export default ProductImage; 
