var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//lets create new schema and define what it should look like
var schema = new Schema ({
  imagePath: {type: String, required:true},
  title: {type: String, required:true},
  description: {type: String, required:true},
  price: {type: Number, required:true}
});

//create and export model with which we can work with naming it Product and passing in schema(we have defined above)
module.exports = mongoose.model('Product', schema);
