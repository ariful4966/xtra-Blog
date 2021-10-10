const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    maxlength: 15,
  },
  email: {
    type: String,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "Profile",
  },
  profilePics: {
    type: String,
    default:
      "https://cdn.imgbin.com/21/4/22/imgbin-computer-icons-login-user-system-administrator-admin-L1LTfM47FsD3A2gus0rdy8WpJ.jpg",
  },
},{
    timestamps: true
});


const User = model('User', userSchema);

module.exports = User;