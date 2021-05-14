const mongoose = require('mongoose');

const db_username = process.env.MONGO_USER || 'admin';
const db_password = process.env.MONGO_PASS || 'password';
const db_name = process.env.MONGO_DBNAME || 'shorter_db';
const mongo_server = process.env.MONGO_SERVER || 'localhost';
const mongo_port = process.env.MONGO_PORT || 27017;

const uri = `mongodb://${db_username}:${db_password}@${mongo_server}:${mongo_port}/${db_name}?authSource=admin`;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

module.exports = connection;
