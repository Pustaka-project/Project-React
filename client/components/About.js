import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';

// import {getCountryList} from '../actions/countryListActions';
// import {getHotelsList} from '../actions/hotelListActions';
// import {getAvailability} from '../actions/availabilityActions';
// import {getUserInfo} from '../actions/userInfoActions';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-12">
            <h1>About us!</h1>
          </div>
        </div>
      </div>
    );
  }
}

//Marking required prop types ensure that another dev who will be using your component always knows what the component
//expects since React throws an error if a required prop is missing.
