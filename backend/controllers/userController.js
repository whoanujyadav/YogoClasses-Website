const userModel = require("../models/userModel");

// login callback
const loginController = async (req, res) => {
  try {
    const { email, batch } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Please register first.",
      });
    }

    var nowdate = new Date();
    nowdate = nowdate.getMonth();
    var prevdate = user.prevDate.getMonth();
    if (prevdate === nowdate) {
      return res.status(201).json({
        success: true,
        message: "You already paid the fee.",
      });
    } else {
      await userModel.findOneAndUpdate(
        { email },
        { prevDate: new Date(), batch }
      );
      return res.status(201).json({
        success: true,
        message: "Payment successful.",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

//Register Callback
const registerController = async (req, res) => {
  try {
    // const newUser = new userModel(req.body);
    const { name, email, age, batch, mo_no } = req.body;
    const tuser = await userModel.findOne({ email });
    if (!tuser) {
      await userModel.create({
        name,
        email,
        batch,
        age,
        mo_no,
        isPaid: true,
        prevDate: new Date(),
      });
      // await newUser.save();
      res.status(201).json({
        success: true,
        message: "Registration and Paid successful!",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Email already exist and now you have to only pay fees.",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
  }
};

module.exports = { loginController, registerController };