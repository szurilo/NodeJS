const http = require('http'); // http module-t importálom be
const app = require('./app1'); // az app1.js fájlt importálom be

const port = process.env.PORT || 3000; // a port konstans értéke vagy process.env.PORT vagy ha az nincs definiálva akkor 3000 lesz

const server = http.createServer(app); // létrehoz egy server-t ami az app module-ban leírtak szerint szolgálja ki a böngészőket

server.listen(port); // itt indítom el a szervert, úgy mondjuk hogy a 3000-es porton fog halgatni

