const mongoose = require('mongoose');
const chalk = require('chalk');
const keys = require('../config/keys');

require('../components/Admin/model');

const connectedDB = async () => {
  try {
    mongoose.Promise = global.Promise;
    await mongoose.connect(keys.mongoURI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log(
      chalk
        .bgHex('#10c78d')
        .hex('#212c34')
        .bold(
          '=====> MongoDB database CONNECTION established successfully <====='
        )
    );
  } catch (err) {
    console.log(
      chalk
        .bgHex('#e03325')
        .hex('#fff')
        .bold(err)
    );
  }
};

module.exports = connectedDB;
