const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  autoIndex: false, // Don't build indexes
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4 // Use IPv4, skip trying IPv6
};

const uuid = require("uuid/v1");
mongoose.set('debug', true);
mongoose.connect("mongodb://127.0.0.1:27017/test",options);

var userSchema = new mongoose.Schema({
    uuid: String,
    name: String,
    password: String
});

const User = mongoose.model("User",userSchema,"user");

/*
var user = new User();
user.uuid = uuid();
user.name = 'jiahe';
user.password = "password";
user.role_id = mongoose.Types.ObjectId();
user.save(function(err,user){
    console.log(user);
});
*/

User.find({uuid:'d3ffc450-c5e4-11e8-a580-bbd1f506eb0a'},function(err,docs){
    console.log(docs);
});

User.findOne({uuid:'d3ffc450-c5e4-11e8-a580-bbd1f506eb0a'},function(err,docs){
    console.log(docs);
});


setTimeout(function() {
    console.log("close the connection");
    mongoose.disconnect();   
}, 2000);









