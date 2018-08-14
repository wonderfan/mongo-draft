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
global.db = mongoose.connect('mongodb://admin:password@127.0.0.1:27017/zigdb',options);
const Schema = mongoose.Schema;

const Chain = new Schema({
  name: String,
  type: String
});

const ChainModel = mongoose.model('Chain',Chain);

/*
var chain = new ChainModel({name:"hyperledger",type:"private"});
chain.save(function (err) {
  if (err) return console.error(err);
});
*/

ChainModel.find({},function (err, docs) {
    if (err) return console.error(err);
    console.log(docs);
    mongoose.disconnect();
});

