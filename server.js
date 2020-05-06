const express = require('express');
const path = require('path');

// App instance initialization
const app = express();

// Static Page
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// App Routes
app.use('/api/members', require('./api/Routes'));

// Server Port Configuration
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log( 'Running Node.js server on http://localhost:' + PORT  ));