import React, { Component } from 'react';
import Category from './Category.js';

class Body extends Component {
    render() {
        return (
            /* Body will be again divided into features and category
              and can be used as reusable component. */
            <div className="content-body">

                <h2>FEATURES</h2>
                <div className="col-md-3">
                    <p><h2 className="hover1">100% FREE</h2></p>
                    <p className="features">create a free account, so that <br />you would be able to publish as many ads as you want.</p>
                </div>


                <div className="col-md-3">
                    <p><h2>USER FRIENDLY</h2></p>
                    <p className="features">With our user friendly UI <br />you can explore our website easily.</p>
                </div>

                <div className="col-md-3">
                    <p><h2>RELIABILITY</h2></p>
                    <p className="features">You can reliable on us<br /> for best study materials.</p>
                </div>

                <div className="col-md-3">
                    <p><h2>PRIVACY</h2></p>
                    <p className="features">We are concerned about privacy of users as well as advertisements<br /> they publish on the website.</p>
                </div>
                <Category />
            </div>
        );
    }
}
export default Body;
