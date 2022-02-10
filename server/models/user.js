const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/blog-app-bootcamp');
mongoose.connect('mongodb+srv://kavya:norka@cluster0.ttt9b.mongodb.net/assign-app?retryWrites=true&w=majority');
const Schema = mongoose.Schema;

var articleSchema = new Schema({
    name: {type:String},
    
    emailid:{type:String},
    password:{type:String},
    confirmpassword:{type:String}
})
var Users = mongoose.model('users', articleSchema);

module.exports = Users;