const express = require('express');

const app = express();
const port = 5000;

// Middleware to retrieve today's date and current time
const dateAndTimeMiddleware = (req, res, next) => {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleTimeString();

    req.dateAndTime = {
        date: currentDate.toDateString(),
        time: currentTime
    };

    next();
};

// Apply the middleware to all routes
app.use(dateAndTimeMiddleware);

// Route 1
app.get('/', (req, res) => {
    res.send('<html><body><p>Home Page</p></body></html>');
});

// Route 2
app.get('/second', (req, res) => {
    res.send(`<html><body><p>Second Page</p><p>Date: ${req.dateAndTime.date}</p><p>Time: ${req.dateAndTime.time}</p></body></html>`);
});

// 404 Route
app.use((req, res) => {
    res.status(404).send('<html><body><p>Page Not Found</p></body></html>');
});

app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});
