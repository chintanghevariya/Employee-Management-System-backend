const mongoose = require('mongoose');
require('mongoose-type-email');

var validationEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const empSchema = new mongoose.Schema({
    FirstName:{
        type:String,
        required:true,
        trim:true,
        lowercase: true
    },
    LastName:{
        type: String,
        required:true,
        trim:true,
        lowercase: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: [validationEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  }
});

const emp = mongoose.model("employee",empSchema);
module.exports = emp;