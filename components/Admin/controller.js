const Store = require('./store.js');
const chalk = require('chalk');

exports.newAdmin = req =>
  new Promise((resolve, reject) => {
    if (!req.body.email && !req.body.password) {
      console.log(
        chalk
          .bgHex('#4eb3f4')
          .hex('00#1f2530')
          .bold(`[Message Controller] => No hay admin o password`)
      );
      reject(new Error('Los datos son incorrectos'));
      return false;
    }
    const { email, password, firstName, lastName, permission } = req.body;

    const getAdmin = {
      email,
      password,
      firstName,
      fullName: `${firstName} ${lastName}`,
      lastName,
      permission,
    };
    resolve(Store.new(getAdmin));
  });

exports.allAdmin = () =>
  new Promise((resolve, reject) => {
    resolve(Store.all());
  });
