const Admin = require('./model');

function newAdminStore(admin) {
  const setAdmin = new Admin(admin);
  return setAdmin.save();
}

async function adminStore() {
  const admin = await Admin.find();
  return admin;
}

module.exports = {
  new: newAdminStore,
  all: adminStore,
};
