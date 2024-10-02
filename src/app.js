const express = require('express');
const connectDB = require("./config/database");
const User = require('./models/user');

const app = express();

// Middleware to parse the incoming request body
app.use(express.json());

// Request handler to create a new user profile
app.post('/signup', async (req, res) => {
  try{
    user_info = req.body;
    const userObj = {
      firstName: user_info.firstName,
      lastName: user_info.lastName,
      emailId: user_info.emailId,
      password: user_info.password,
      age: user_info.age,
      gender: user_info.gender
    }
    // Create a new user profile
    const user = new User(userObj);
    await user.save();
    res.send('User profile successfully created');
  } catch(err){
    res.status(400).send("Something went wrong could not create user profile");
  }
});

app.use('/',(err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

connectDB().then(() => {
  console.log('Connected to MongoDB Successfully...');
  // app can only listen only after the connection to DB is successfully established
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch((err) => {
  console.log('MongoDB connection failed', err);
})

