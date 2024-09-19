// const { Password } = require("@mui/icons-material");
// const { create } = require("@mui/material/styles/createTransitions");
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  
  role: {
    type: String,
    default: "user",
    require: true,
  },

 
});

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;