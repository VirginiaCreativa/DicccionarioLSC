const express = require('express');
const response = require('../../middlewares/response');

const router = express.Router();

const Controller = require('./controller');

router.post('/', (req, res) => {
  Controller.newAdmin(req)
    .then(add => {
      console.log(add);
      response.success(req, res, add, 'New Admin');
    })
    .catch(err => response.error(req, res, 'Infomacion invalida', 500, err));
});

router.get('/', (req, res) => {
  Controller.allAdmin(req)
    .then(data => {
      response.success(req, res, data, 'All');
    })
    .catch(err => response.error(req, res, 'Infomacion invalida', 500));
});

module.exports = router;
