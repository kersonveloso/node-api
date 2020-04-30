const http = require('http');
const members = require('./Members');

let server = http.createServer(( req, res ) => {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-type' : 'text/html' });
        res.write('<html><body><h1>Heyyy</h1></body></hmtl>');
        res.end();
    } else if ( req.url == '/api') {
        res.writeHead(200, { 'Content-type' : 'application/json' });
        res.write(JSON.stringify(members));
        res.end();
    } else {
        res.end( 'invalid request' );
    }
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log( 'Running Node.js server on http://localhost:' + PORT  ));