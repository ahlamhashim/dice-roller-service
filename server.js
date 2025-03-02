const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// Middleware to enable CORS
app.use(cors());

// Endpoint to roll a dice
app.get('/api/roll-dice', (req, res) => {
    const sides = parseInt(req.query.sides) || 6; // Default to 6-sided dice
    const result = Math.floor(Math.random() * sides) + 1;
    res.json({ sides, result });
});

// Wake-up endpoint
app.get('/api/wake-up', (req, res) => {
    res.json({ message: 'Server is awake!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});