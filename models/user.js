var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
//lets create new schema and define what it should look like
var userSchema = new Schema ({
  email: {type: String, required:true},
  password: {type: String, required:true}
});

userSchema.methods.encryptPassword = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};
//create and export model with which we can work with naming it Product and passing in schema(we have defined above)
module.exports = mongoose.model('User', userSchema);
