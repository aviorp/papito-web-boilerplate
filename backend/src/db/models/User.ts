import mongoose, { Schema } from "mongoose";
import { UserI } from "../../interfaces";

const UserSchema: Schema<UserI> = new Schema({
  username: {
    type: String,
    required: [true, "Please enter a valid username"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please enter a valid Password"]
  },
  firstName: {
    type: String,
    required: [true, "Please enter a valid firstName"]
  },

  lastName: {
    type: String,
    required: [true, "Please enter a valid last name"]
  },

  phone: {
    type: String,
    required: [true, "Please enter a valid phone"]
  },

  image: {
    type: String
  },

  isAdmin: {
    type: Boolean,
    default: false
  }
});

export default mongoose.model("users", UserSchema);
