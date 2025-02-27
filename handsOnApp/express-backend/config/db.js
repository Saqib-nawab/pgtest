const mongoose = require('mongoose');
const sql = require('mssql');

// MongoDB connection
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};

// SQL Server connection
const connectSQLServer = async () => {
    try {
        await sql.connect(process.env.SQL_SERVER_CONNECTION_STRING);
        console.log('SQL Server connected');
    } catch (err) {
        console.error('SQL Server connection error:', err);
        process.exit(1);
    }
};

// Connect to both databases
const connectDB = async () => {
    await connectMongoDB();
    await connectSQLServer();
};

module.exports = connectDB;