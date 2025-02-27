const getAnomalies = (req, res) => {
    const { startDate, endDate } = req.query;

    // Mock data (replace with actual database queries)
    const anomalies = [
        { id: 1, date: '2023-10-01', description: 'Anomaly 1' },
        { id: 2, date: '2023-10-02', description: 'Anomaly 2' },
    ];

    res.json(anomalies);
};

module.exports = { getAnomalies };