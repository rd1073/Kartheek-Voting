const mongoose = require("mongoose")
require('dotenv').config();



const conn = mongoose.createConnection(process.env.DB_URI);
conn.on('connected', () => {
  console.log('Mongoose connected mongodb');
});
conn.on('error', (err) => {
  console.error(`Mongoose connection error: ${err}`);
});



 //users
const UserSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
    aadhar:{
        type:String,
        
        
    },
    voter:{
        type:String,
        required:true,
        
    }
},{timestamps:true})
  

const User = conn.model('User', UserSchema);

const voteSchema = new mongoose.Schema({
    candidate1: {
        type: Number,
        default: 0
    },
    candidate2: {
        type: Number,
        default: 0
    }
});

// Create a model for votes using the schema
const Vote = conn.model('Vote', voteSchema);


module.exports = { conn, User, Vote};