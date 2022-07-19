const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OauthModel = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

const cred = mongoose.model("credModel", OauthModel);
module.exports = { cred };
