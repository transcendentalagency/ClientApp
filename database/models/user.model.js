const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// type of content schema will take
const userSchema = mongoose.Schema(
  {
    username: { type: String },
    email: { type: String },
    password: { type: String },
  },
  { timestamp: true }
);

// Check to see if user hash is over 12 characters and hash password
userSchema.pre("save", function (next) {
  let user = this;
  if (user.isModified("password")) {
    return bcrypt.hash(user.password, 12, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      return next();
    });
  } else {
    return next();
  }
});

// Compare password to save password
userSchema.methods.comparePassword = function (password, next) {
  bcrypt.compare(password, this.password, function (err, match) {
    if (err) {
      return next(err, false);
    }

    return next(null, match);
  });
};

// export User
const User = mongoose.model("User", userSchema);
module.exports = User;
