var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//lets create new schema and define what it should look like
var schema = new Schema ({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  cart: {type: Object, required: true},
  address: {type: String, required:true},
  name: {type: String, required: true},
  paymentId: {type: String, required:true}
});

//create and export model with which we can work with naming it Product and passing in schema(we have defined above)
module.exports = mongoose.model('Order', schema);
