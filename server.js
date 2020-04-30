const http = require('http');
const path = require('path');
const express = require('express');
const members = require('./api/Members');

app = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// Static Page
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/api/members', (req, res) => {
    res.json(members);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log( 'Running Node.js server on http://localhost:' + PORT  ));