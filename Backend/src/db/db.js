const mongoose = require('mongoose');   

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://riteshpote0603_db_user:Risha%400415@cluster0.dlm4fwc.mongodb.net/db_1');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }}


  module.exports = connectDB;   