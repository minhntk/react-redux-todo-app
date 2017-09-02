var mongoConnect = require('mongoose');
mongoConnect.connect('mongodb://localhost/ChatApp');
module.exports = mongoConnect;