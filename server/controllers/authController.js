const User = require("../../database/models/user.model");
const jwt = require("jsonwebtoken");
const validator = require("email-validator");

// find the email + password entered and validate to signin
const signin = async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send("email does not exist");
    }

    // compare password and user token
    user.comparePassword(password, (err, match) => {
      if (!match || err) return res.status(400).send("password does not match");
      let token = jwt.sign({ _id: user._id }, "fdsafdsa", {
        expiresIn: "24h",
      });

      // send data to db to gain entry
      res.status(200).send({
        token,
        username: user.username,
        email: user.email,
        id: user._id,
        createdAt: user.createdAt,
        updateAt: user.updateAt,
      });
    });
  } catch (err) {
    return res.status(400).send("login failed:", err);
  }
};

const register = async (req, res) => {
  const { email, password, username } = req.body;
  // take user data entered validate entries that meet criteria
  try {
    if (!username) return res.status(400).send("username is required");
    if (!email) return res.status(400).send("email is required");
    if (!validator.validate(email)) {
      return res.status(400).send("enter valid email id");
    }
    if (!password || password.length < 6) {
      return res.status(400).send("enter valid password");
    }

    // find an email, if it exists catch error, cannot enter same email
    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).send("email is taken");
    }

    // create a new user using the data entered
    const user = await new User({
      email,
      password,
      username,
    });

    // save the new user to db
    await user.save();
    return res.status(200).send(user);
  } catch (error) {
    return res.status(400).send("there was an error creating user:", error);
  }
};

// export both functions
module.exports = { signin, register };
