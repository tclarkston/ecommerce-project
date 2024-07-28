const mongoose = require("mongoose");

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
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
  // resetPasswordToken: String,
  // resetPasswordExpires: Date,
  // mobile: {
  //     type: String,
  //     required: true
  // },
  // Add any other fields as needed
  addresses: [
    {
      name: String,
      mobile: String,
      houseNo: String,
      street: String,
      city: String,
      country: String,
      landmark: String,
      postalCode: String,
    },
  ],
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
