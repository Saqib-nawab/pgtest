-- Design a database schema for a system that tracks user activities, anomalies
-- etected by ML models, and analytics dashboards.Use MongoDB and SQL
-- oncepts where appropriate.


-- Create a MongoDB collection to store user activities
CREATE DATABASE user_activity_db;
USE user_activity_db;

CREATE TABLE user_activities (
    activity_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    activity_type VARCHAR(100),
    activity_timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) 
)