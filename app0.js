// use Postman(or a browser) to send a GET or POST request onto localhost:3000 and it will respond with this HTML
const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter msg</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>')
  res.write('<body>Hello from my Node.Js Server!</body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
