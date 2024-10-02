const mongoose = require('mongoose');
require('dotenv').config();
const MONGO_CLUSTER_URL  = process.env.MONGO_CLUSTER_URL; 
const MONGO_DB_NAME = process.env.MONGO_DB_NAME;

const connectDB = async () => {
    await mongoose.connect(MONGO_CLUSTER_URL + MONGO_DB_NAME);
};

module.exports = connectDB;