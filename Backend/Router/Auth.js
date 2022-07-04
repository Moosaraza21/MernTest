const express = require("express");
const router = express.Router();
const UserTest = require("../Models/UserSchema");
const passport =require("passport")
const jwt = require('jsonwebtoken');
//var bcrypt = require('bcryptjs');



router.post('/login', function (req, res, next) {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user
            });
        }
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }
           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign(user, 'your_jwt_secret');
           return res.json({user, token});
        });
    })(req, res);
});

router.post("/Register", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  const user = await UserTest.findOne({ username: username });

  if (user) {
    res.status(400).json({ message: "user registred successfully" });
  } else {
    const User = new UserTest({ username, password });
    await User.save();
    res.status(200).json({ message: "User Registered" });
  }
});

module.exports = router;
