
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

mongoose.connect('mongodb://localhost:27017/questionnaireDB', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error: ', err));

// Middleware
app.use(bodyParser.json());

// Define Mongoose Schema for responses
const responseSchema = new mongoose.Schema({
  age: String,
  gender: String,
  socialMediaUsage: String,
  // Define other fields for all sections
});

const Response = mongoose.model('Response', responseSchema);

// API endpoint to submit responses
app.post('/submit', async (req, res) => {
  try {
    const newResponse = new Response(req.body);
    await newResponse.save();
    res.status(200).send('Data saved');
  } catch (err) {
    res.status(500).send('Error saving data: ' + err);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
