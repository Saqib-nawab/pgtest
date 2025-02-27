//to design a RESTful API endpoint for retrieving anomaly data for a specific period in Node.js, you can use the Express framework. Below are the details for the endpoint:

// Endpoints detail:
// Method : GET
// Path: /api/anomalies
// start_date(required): The start date of the period in YYYY - MM - DD format.
//     end_date(required): The end date of the period in YYYY - MM - DD format.
// Response format: JSON 

// Example usage in Node.js and express:
const express = require('express');
const mysql = require('mysql');
const app = express();

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


// Define the endpoint to retrieve anomalies for a specific period
app.get('/api/anomalies', (req, res) => {
    const { start_date, end_date } = req.query;

    if (!start_date || !end_date) {
        return res.status(400).json({ error: 'start_date and end_date are required' });
    }

    const query = `
    SELECT * FROM anomalies
    WHERE activity_timestamp BETWEEN ? AND ?
  `;

    db.query(query, [start_date, end_date], (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        res.json(results);
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


// Docs
// Example request
// GET / api / anomalies ? start_date = 2025-01-01 & end_date=2025-01 - 31

// Example response(JSON)
// [
//     {
//         "anomaly_id": 1,
//         "activity_id": 101,
//         "anomaly_type": "fraud",
//         "activity_timestamp": "2025-01-15T10:00:00Z",
//         "fraud_score": 85
//     },
//     {
//         "anomaly_id": 2,
//         "activity_id": 102,
//         "anomaly_type": "anomaly",
//         "activity_timestamp": "2025-01-20T14:30:00Z",
//         "anomaly_score": 90
//     }
// ]


// What best practices would you follow when designing APIs for external
// systems ?
// Here are some best practices to follow when designing APIs for external systems:

// 1. Use HTTPS: Always use HTTPS to ensure secure communication between your application and external systems.

// 2. Use JSON: JSON is a widely supported and easy - to - read format for transmitting data between systems.

// 3. Use API keys: Use API keys to authenticate and authorize requests to your APIs.Avoid hardcoding API keys into your code.

// 4. Rate limiting: Implement rate limiting to prevent abuse of your APIs.Set limits on the number of requests a client can make within a certain time period.

// 5. Error handling: Implement proper error handling in your APIs to provide clear and understandable error messages to clients.

// 6. Versioning: Use versioning in your APIs to allow clients to update their applications without breaking existing functionality.