var Product = require('../models/products');
var mongoose = require('mongoose');
mongoose.connect('localhost:27017/shopping');

var product = [
  new Product({
    imagePath: '/images/mortalkombat.jpg',
    title: 'Mortal Kombat',
    description: 'KO!Be the badest fighter on the block.Fight to death',
    price: 10
  }),
  new Product({
    imagePath: '/images/godofwar.jpg',
    title: 'God of War',
    description: 'Beat the hell out of giants and beast as Kratos...The God of War',
    price: 10
  }),
  new Product({
    imagePath: '/images/nfs.jpg',
    title: 'Need for Speed',
    description: 'Leave cops smelling your propane with the sweetest rides in the world.Born to race',
    price: 10
  })
];

var done = 0;
for (var i = 0; i < product.length; i++) {
  product[i].save(function(err, result) {
    done++;
    if (done === product.length){
      exit();
    }
  });
}


function exit(){
  mongoose.disconnect();
};
