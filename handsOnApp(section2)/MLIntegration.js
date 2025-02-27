// ML Integration Simulation(10 points)
// o Write a Node.js script that calls a mock ML model API(POST / ml / predict) and
// store the response in MongoDB.Assume the ML API returns anomalies.

const express = require('express');
const mysql = require('mysql');
const app = express();
const axios = require('axios');

const port = 3000;

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'anomaly_detection_db'
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// ML API endpoint
const mlApiUrl = 'http://localhost:5000/ml/predict';

// Mock ML model response
const mockMlModelResponse = {
    anomalies: [
        { id: 1, date: '2023-10-01', description: 'Anomaly 1' },
        { id: 2, date: '2023-10-02', description: 'Anomaly 2' },
    ],
};

// Endpoint to call the ML model API and store the response in MongoDB
app.post('/store-ml-response', async (req, res) => {
    try {
        // Call the ML model API
        const response = await axios.post(mlApiUrl, req.body);

        // Store the response in MongoDB
        const query = 'INSERT INTO ml_responses (response_data) VALUES (?)';
        db.query(query, [JSON.stringify(response.data)], (err, result) => {
            if (err) {
                console.error('Error storing ML response:', err);
                return res.status(500).json({ error: 'Internal server error' });
            }
            res.json({ message: 'ML response stored successfully' });
        });
    } catch (error) {
        console.error('Error calling ML model API:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
