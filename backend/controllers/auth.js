const User = require("../models/user");
const bcrypt = require("bcrypt");

const registerHandler = async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = new User({ username, password: hashedPassword, email });
    await user.save().then(() => res.status(200).json({ message: "User created successfully", user }));
  } catch (error) {
    res.status(400).json({ message: "User Already Exists" });
  }
};

const loginHandler = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(200).json({ message: "Please Sign Up first" });
    }
    const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isPasswordCorrect) {
      res.status(200).json({ message: "Enter correct password" });
    }
    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (error) {
    res.status(200).json({ message: "User Already Exists" });
  }
};

exports.registerHandler = registerHandler;
exports.loginHandler = loginHandler;
