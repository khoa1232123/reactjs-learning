const jwt = require('jsonwebtoken');

const multer = require('multer');
const shortid = require('shortid');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), 'uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + '-' + file.originalname);
  },
});

exports.upload = multer({ storage });

exports.requireSignin = (req, res, next) => {
  console.log('signin');
  if (req.headers.authorization) {
    console.log('success');
    const token = req.headers.authorization.split(' ')[1];
    const user = jwt.decode(token, process.env.JWT_SECRET);
    req.user = user;
    console.log(token);
  } else {
    console.log('fail');
    return res.status(400).json({ message: 'Authorization required' });
  }
  next();
};

exports.userMiddleware = (req, res, next) => {
  console.log('abc');
  if (req.user.role !== 'user') {
    console.log(req.user.role);
    return res.status(400).json({ message: 'User Access denied' });
  }
  console.log('2');
  next();
};

exports.adminMiddleware = (req, res, next) => {
  console.log(req.user);
  if (req.user.role !== 'admin') {
    return res.status(400).json({ message: 'Admin Access denied' });
  }
  next();
};
