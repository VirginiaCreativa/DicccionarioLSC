const mongoose = require('mongoose');

const { Schema } = mongoose;

const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    default: 'https://img.icons8.com/pastel-glyph/344/person-male.png',
  },
  permission: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Admins', AdminSchema);
