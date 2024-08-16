const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const port = 8080;
const { MongoClient } = require('mongodb');
const path = require('path');

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing form data

let db;

// Connect to MongoDB and start the server only after a successful connection
MongoClient.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB...');
    db = client.db(); // Store the database connection

    // Start the server after the DB connection is established
    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch(err => {
    console.error('Could not connect to MongoDB...', err);
    process.exit(1); // Exit the process if the connection fails
  });

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Serve the HTML page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission (POST route)
app.post('/submit', async (req, res) => {
  try {
    const collection = db.collection('nichith'); // Replace with your collection name
    const userData = req.body;
    const result = await collection.insertOne(userData);
    res.send(`Data inserted with ID: ${result.insertedId}`);
  } catch (err) {
    res.status(500).send('Error inserting data: ' + err.message);
  }
});

// 1. GET route: Retrieve all data from the collection
app.get('/data', async (req, res) => {
  try {
    const collection = db.collection('nichith'); // Replace with your collection name
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (err) {
    res.status(500).send('Error fetching data: ' + err.message);
  }
});
