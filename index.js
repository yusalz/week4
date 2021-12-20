const http = require('http');

http
  .Server((req, res) => {

    if (req.url === '/result4/') {
      let CORS = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers, x-test'

      };

      const result = {
        message: 'itmo309692',
        'x-result': req.headers['x-test'],
      };
      let body = '';

      req
        .on('data', data => (body += data))
        .on('end', () => {
          result['x-body'] = body;
          res.writeHead(200, {... CORS, 'Content-Type': 'application/json' });
          res.end(JSON.stringify(result));
        });
    }
  })
  .listen(process.env.PORT);
