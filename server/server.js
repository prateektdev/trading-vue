var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.json());

require("./app/router/router.js")(app);

const db = require("./app/config/db.config.js");

const Role = db.role;

// force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync with { force: true }");
  //   initial();
});

//require('./app/route/project.route.js')(app);

// Create a Server
let http = require('http').Server(app);
let io = require('socket.io')(http);
// var server = require('http').createServer(app);
// app.listen(8081, function () {
//   var host = server.address().address;
//   var port = server.address().port;

//   console.log("App listening at http://%s:%s", host, port);
// });
// const io = require("socket.io")(server);
io.on("connection", (client) => {

  client.on("event", (data) => {
    /* … */
  });
  client.on("disconnect", () => {
    /* … */
  });
  setTimeout(() => {
	io.emit('this is test socket message',(data)=>{
		
	})
  }, 1000);
});
http.listen(3000);

function initial() {
  Role.create({
    id: 1,
    name: "USER",
  });

  Role.create({
    id: 2,
    name: "ADMIN",
  });

  Role.create({
    id: 3,
    name: "PM",
  });
}
