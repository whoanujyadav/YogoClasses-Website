const mongoose = require("mongoose");

//schema design
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required and should be unique"],
      unique: true,
    },
    age: {
      type: Number, 
      required: [true, "Age must be between 18 to 65"]
    },
    batch: {
      type: String,
      required: [true]
    },
    mo_no: {
      type: Number, 
      required: [true, "Must be of 10 digits"]
    },
    isPaid: {
      type: Boolean,
      default: false, 
    },
    prevDate: Date,
  }
  // { timestamps: true }
);

//export
const userModel = mongoose.model("users", userSchema);
module.exports = userModel;