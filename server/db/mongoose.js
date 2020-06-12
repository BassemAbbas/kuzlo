const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const uri = "mongodb+srv://dbUser:Orange123$@cluster0-wzr4d.mongodb.net/kuzlo?retryWrites=true&w=majority"
// mongoose.connect('mongodb://localhost:27017/Kuzlo', {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = {mongoose};
