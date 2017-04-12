import axios from 'axios';
import jwt from 'jsonwebtoken';
import NavigationBar from '../components/NavigationBar';
import { SET_CURRENT_USER } from './typeConstants';
import { setAuthToken } from '../utils/setAuthToken';
//--This functions contain all the path's to connect with backend
/* Setting set Current User's Id to Sessions */
export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

//-- Function to connect with backend for validating
//-- login
export function userLoginRequest(authData) {
  return dispatch => {
    //uncomment the below line once the API is ready
    console.log("data is ", authData);
    let data = JSON.stringify(authData);
    return axios.post('/pustaka/user/login', authData).then(res => {
      console.log("auth login ", res);
      if (res.data.response) {
        const jwtToken = res.data.response.token;
        if (jwtToken) {
          localStorage.setItem('jwtToken', jwtToken);
          alert("User Login Sucessfull");
          const decodedToken = jwt.decode(jwtToken);
          const user = decodedToken.user_details;
          const token = decodedToken.token;
          if (user.is_mobile_verified) {
            setAuthToken(user.token);
            dispatch(setCurrentUser(user));
          }
        }
      }
      return res;
    });
  }
}

//Function to Sell Book by particular currentUser
export function addBookRequest(data) {
  console.log("In the Path: " , data);
  return axios.post('/pustaka/book/addbook/2' ,data).then(res => {
    console.log("book added", res);
    if (res.data.response) {
      console.log("response is ", res);
    }
  });
}


//all API calls should follow the same structure
//--function for UserSignUp connecting in Backend--//
export function userSignUpRequest(data) {
  return axios.post('/pustaka/user/register', data).then(res => {
    console.log("auth SignUp", res);
    if (res.data === "User Already Exist") {
      console.log("response is ", res);
      alert("Email already exist.");
    }
    else {
      alert("Registration Sucessfull. Please goto Login-page for Signin");
    }
  });
}

//--function for logout--//
export function logout(userid) {
  return dispatch => {
    let data = JSON.stringify(userid);
    return axios.post('/pustaka/user/logout', data).then(res => {
      localStorage.removeItem('jwtToken');
      setAuthToken(false);
      dispatch(setCurrentUser({}));
    });
  }
}

export function buyBookRequest(data) {
    console.log(data);
     return axios.post(`/pustaka/book/buyWithEmail` ,data).then(res => {
    console.log("book added", res);
    alert("Mail sent");
    if (res.data.response) {
      console.log("response is ", res);
    }
  });
}