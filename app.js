// use Postman(or a browser) to send a GET or POST request onto localhost:3000 and it will respond with this JSON
// it responds with this:
// {
//   "ua":"a felhasználó user-agentje",
//   "ip":"a felhasználó ip címe",
// }
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.status(200).json({
    ua: req.headers['user-agent'],
    ip: req.connection.remoteAddress,
    uuid: 'a kérést kiszolgaló worker uuid-ja'
  });
});

module.exports = app;