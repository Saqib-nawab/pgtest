-- Design a database schema for a system that tracks user activities, anomalies
-- detected by ML models, and analytics dashboards.Use MongoDB and SQL
-- Concepts where appropriate.


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

-- Create a MongoDB collection to store anomalies detected by ML models
CREATE DATABASE anomaly_detection_db;
USE anomaly_detection_db;

CREATE TABLE anomalies (
    anomaly_id INT PRIMARY KEY AUTO_INCREMENT,
    activity_id INT,
    anomaly_type VARCHAR(100),

    -- Add additional fields specific to anomaly types
    -- For example, for fraud detection, additional fields could include fraud_score
    -- For example, for anomaly detection, additional fields could include anomaly_score
    -- For example, for behavioral analysis, additional fields could include behavior_patter
    FOREIGN KEY (activity_id) REFERENCES user_activities(activity_id)
)