import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../App';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Home from '../components/Home';
import About from '../components/About';
import Welcome from '../components/Welcome';
import requireAuth from '../utils/requireAuth';
import Addbook from '../components/Addbook/Addbook.js';
import BuyBook from '../components/buybook/BuyBook';
//This has the Routes defined with paths that the components will be linking.
export default (
  // this page will be started when Application is first Started.
  <Route path = "/" component={App}> 
    <IndexRoute component={Welcome} />
    <Route path= "login" component={Login} />
    <Route path= "register" component={Register} />
    <Route path= "home" component={Home} />
    <Route path= "about" component={About} />
    <Route path= "sell" component={Addbook}/>
    <Route path= "buybook" component={BuyBook}/>
  </Route>
)
