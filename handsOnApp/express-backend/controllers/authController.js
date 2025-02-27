const jwt = require('jsonwebtoken');

const login = (req, res) => {
    // Mock user (replace with actual user validation logic)
    const user = { id: 1, username: 'admin' };

    // Generate JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token });
};

module.exports = { login };