var WebSocketServer = require('websocket').server;
var app = require("express")();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

var clients = [];

require("./app/router/router.js")(app);

const db = require("./app/config/db.config.js");

const Role = db.role;

// force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync with { force: true }");
  //   initial();
});

//require('./app/route/project.route.js')(app);



const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', () => { console.log("connected ") });
server.listen(3000, () => {
  console.log('listening on *:3000');
  initial();
});

// create the server
wsServer = new WebSocketServer({
  httpServer: server
});
wsServer.on('request', function (request) {
  if (!originIsAllowed(request.origin)) {
    // Make sure we only accept requests from an allowed origin
    request.reject();
    console.log((new Date()) + ' Connection from origin ' + request.origin + ' rejected.');
    return;
  }

  var connection = request.accept(null, request.origin);
  console.log((new Date()) + ' Connection accepted.');
  connection.on('message', function (message) {
    if (message.type === 'utf8') {
      console.log('Received Message: ' + message.utf8Data);
      connection.sendUTF(message.utf8Data);
    }
    else if (message.type === 'binary') {
      console.log('Received Binary Message of ' + message.binaryData.length + ' bytes');
      connection.sendBytes(message.binaryData);
    }
  });
  connection.on('close', function (reasonCode, description) {
    console.log((new Date()) + ' Peer ' + connection.remoteAddress + ' disconnected.');
  });
  connection.sendUTF("hello bro");
});

// Create a Server
// var server2 = app.listen(8081, function () {
//   var host = server2.address().address;
//   var port = server2.address().port;

//   console.log("App listening at http://%s:%s", host, port);
// });

function originIsAllowed(origin) {
  // put logic here to detect whether the specified origin is allowed.
  return true;
}

function initial() {
  Role.create({
    id: 1,
    name: "USER",
  });

  Role.create({
    id: 2,
    name: "ADMIN",
  });
}
