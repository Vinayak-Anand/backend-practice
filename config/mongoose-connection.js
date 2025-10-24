const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/scatch")
.then(function(){
    console.log("Mongoose connected successfully");
})
.catch(function(err){
    console.log("Mongoose connection error: ", err);
});

module.exports = mongoose.connection;