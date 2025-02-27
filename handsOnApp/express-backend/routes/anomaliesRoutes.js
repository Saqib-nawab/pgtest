const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const { getAnomalies } = require('../controllers/anomaliesController');

const router = express.Router();

router.get('/', authMiddleware, getAnomalies);

module.exports = router;