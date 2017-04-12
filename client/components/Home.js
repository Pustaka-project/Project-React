import React, { Component } from 'react';
import { Link } from 'react-router';
import { Route, IndexRoute } from 'react-router';
import { connect } from 'react-redux';
import axios from 'axios';
import Category from './welcomebody/Category';
import Footer from './headerFooter/Footer';
import Addbook from './Addbook/Addbook';
//import {bookListRequest} from '../actions/bookListActions';

// import {getCountryList} from '../actions/countryListActions';
// import {getHotelsList} from '../actions/hotelListActions';
// import {getAvailability} from '../actions/availabilityActions';
// import {getUserInfo} from '../actions/userInfoActions';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }
  // componentWillMount() {
  //       bookListRequest(1,1).then(
  //         (res) => {
  //           console.log('response to login is ',res.data);
  //           if(res.data.error == true) {
  //             this.setState({ errors : { "form" : res.data.message }, isLoading : false })
  //           }
  //           else {
  //             let responseData = res.data.response;
  //             if(responseData.token) {
  //               const jwtToken = responseData.token;
  //               const decodedToken = jwt.decode(jwtToken);
  //               const user = decodedToken.user_details;
  //               this.context.router.push('/home');
  //             }

  //           }
  //         },
  //       );
  //     }
  render() {
    return (
      <div className="dashboard">
        <div className="col-md-6 text-center">
        <Link to="buybook"><button className="btn btn-primary btn-block">BUY BOOK</button></Link>

        </div>
        <div className="col-md-6 text-center">
          <Link to="sell"><button className="btn btn-primary btn-block">SELL BOOK</button>
          </Link>
        </div>
        <br />
        <div className="categories">
          <Category />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

//Marking required prop types ensure that another dev who will be using your component always knows what the component
//expects since React throws an error if a required prop is missing.

//Home also acts as the container(responsible for triggering API calls)

// Home.propTypes = {
//   getCountryList:React.PropTypes.func.isRequired,
//   getHotelsList:React.PropTypes.func.isRequired,
//   getAvailability:React.PropTypes.func.isRequired,
//   getUserInfo:React.PropTypes.func.isRequired
// }

// Home.contextTypes = {
//   router:React.PropTypes.object.isRequired
// }
//
// function mapStateToProps(state) {
//   return {
//     auth:state.auth,
//   }
// }
//
// export default connect(mapStateToProps, { getCountryList , getHotelsList, getAvailability,getUserInfo})(Home)