import path from 'path';
import express, { Application, Request, Response } from 'express';
import router from './Router';

const app: Application = express();

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// Static Page
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/member', router);

const port = 5000 || process.env.PORT;
app.listen(port, () => {
    console.log( 'Server started at http://localhost:' + port  );
});