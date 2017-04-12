import express from 'express';
//import bodyParser from 'body-parser';
import path from 'path';
import http from 'http';
import request from 'request';
import timeout from 'connect-timeout';
import createError from 'http-errors';
import jwt from 'jsonwebtoken';
import session from 'express-session';
import { jwtSecret } from './config';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

let app = express();
const compiler = webpack(webpackConfig);
let tempdata = {};
let backend = 'http://localhost:8080/';

app.use(webpackMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));


app.use(session({
  secret: 'w)iw#%2^-qwzxqy^ww7*6yc3qum9_99a6o6!wxm997vr142w=y',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000 * 24 * 30 }
}));

//app.use(bodyParser.text());
//app.use(bodyParser.urlencoded({ extended: true }));

app.get('/pustaka/*', timeout('30s'), (req, res) => {
  if (req.timedout) return next(createError(503, 'Response timeout'));
  var url = backend + req.url;
  //Add any additional headers like token, API key etc here
  //req.headers['key'] = 'value';
  req.pipe(request(url).on('error', function (err) {
    console.log("error " + err);
  })).pipe(res);
});

app.put('/pustaka/*', timeout('30s'), (req, res) => {
  if (req.timedout) return next(createError(503, 'Response timeout'));
  var url = backend + req.url;
  //Add any additional headers like token, API key etc here
  //req.headers['key'] = 'value';

  req.pipe(request(url).on('error', function (err) {
    console.log("error " + err);
  })).pipe(res);
});

app.post('/pustaka/*', timeout('15s'), (req, res) => {
  if (req.timedout) return next(createError(503, 'Response timeout'));
  var url = backend + req.url;
  //Add any additional headers like token, API key etc here
  //req.headers['key'] = 'value';

  if (req.session.userId) {
    //Logged in user token header to be set here , like so
    console.log('userId in session', req.session.userId);
    url = backend + req.url + '/' + req.session.userId
    // req.session.destroy(); 
  }
  req.headers['content-type'] = 'application/json';
  if (req.url.indexOf('user/logout') != -1) {
    req.pipe(request(url, function (error, response, body) {
      delete req.session.userId;
      delete req.session.user;
      res.json({});
      res.send();
    }));
  }
  if (req.url.indexOf('user/login') != -1) {
    console.log("request reached");
    req.pipe(request(url, function (error, response, body) {
      console.log("response", response);
      console.log("response body", response.body);
      let jsonResponse = {};
      if (response) {
        jsonResponse = JSON.parse(response.body);
        console.log("response for login ", jsonResponse);
        const jwtToken = jwt.sign({
          user_details: {
            first_name: jsonResponse.firstName,
            last_name: jsonResponse.lastName,
          },
        }, jwtSecret);
        console.log("Gen token ", jwtToken);
        jsonResponse.response = {};
        jsonResponse.response.token = jwtToken;
        req.session.userId = jsonResponse.userId;
        req.session.user = jwtToken;
        console.log("jsonres ", jsonResponse);
      }
      res.json(jsonResponse);
      res.send();
    }));
  }


  else {
    req.pipe(request(url).on('error', function (err) {
      console.log("error " + err);
    })).pipe(res);
  }
});

var errorFilter = (err, req, res, next) => {
  if (!res.headersSent) {
    let errcode = err.status || 500;
    let msg = err.message || 'server error!';
    let errResJSON = {};
    errResJSON.msg = msg;
    console.log("error is ", msg);
    res.status(errcode).send(errResJSON);
  }
};

app.use(errorFilter);

app.use('/assets', express.static(__dirname + '/assets'));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});



app.listen(3333, () => console.log('Running on host'));