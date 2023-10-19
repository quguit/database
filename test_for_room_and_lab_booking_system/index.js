



const express = require('express');
const app = require('./app');
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const router = require('./routes');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
module.exports = app;

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = mongoose.model('User', userSchema);
module.exports = User;

const mongoose = require('mongoose');
const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
});
const Room = mongoose.model('Room', roomSchema);
module.exports = Room; 

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Room = require('../models/room');
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});
router.get('/rooms', async (req, res) => {
  const rooms = await Room.find();
  res.json(rooms);
});
router.post('/users', async (req, res) => {
  const user =