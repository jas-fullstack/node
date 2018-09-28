const mongoose = require("mongoose");
const post_schema = mongoose.Schema({
    name:  {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
    }
});
module.exports = mongoose.model("Users",post_schema);