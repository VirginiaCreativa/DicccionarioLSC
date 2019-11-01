const Admin = require('../components/Admin/network');

const admin = app => {
  app.use('/admin', Admin);
};

module.exports = { admin };
