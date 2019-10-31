const express = require('express');
const passport = require('passport');
const chalk = require('chalk');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const cors = require('cors');
const path = require('path');

const app = express();

// ==== MIDDLWARES ==== //
app.use(logger('dev'));
app.use(methodOverride());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));
// app.use(
//   cookieSession({
//     resave: true,
//     saveUninitialized: true,
//     maxAge: 24 * 60 * 60 * 1000,
//     keys: [keys.cookieKey],
//   })
// );
app.use(passport.initialize());
app.use(passport.authenticate('session'));
app.use(passport.session());



// ==== STARTING THE SERVE ==== //
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(
    chalk
      .bgHex('#4eb3f4')
      .hex('#1f2530')
      .bold(`*****> Server up and running on PORT ${PORT}! <*****`)
  );
});
