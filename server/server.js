var WebSocketServer = require("websocket").server;
var app = require("express")();
var bodyParser = require("body-parser");
app.use(bodyParser.json());
var { fetchData, loadTradeMarkets } = require("./app/services/tradeData");
var clients = [];

require("./app/router/router.js")(app);

const db = require("./app/config/db.config.js");

const Role = db.role;

// force: true will drop the table if it already exists
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync with { force: true }");
});

//require('./app/route/project.route.js')(app);

const server = require("http").createServer(app);
const io = require("socket.io")(server);
io.on("connection", () => {
  console.log("connected ");
});
server.listen(3000, () => {
  console.log("listening on *:3000");
  loadTradeMarkets();
  // initial();
});

// create the server
wsServer = new WebSocketServer({
  httpServer: server,
});
wsServer.on("request", async function (request) {
  if (!originIsAllowed(request.origin)) {
    // Make sure we only accept requests from an allowed origin
    request.reject();
    console.log(
      new Date() + " Connection from origin " + request.origin + " rejected."
    );
    return;
  }

  var connection = request.accept(null, request.origin);
  //inserting the socket in clients array;
  clients.push({
    remoteAddress: connection.remoteAddress,
    connection: connection,
  });
  console.log(new Date() + " Connection accepted.");
  await sendStockData(connection);
  setInterval(async () => {
    await sendStockData(connection);
  }, 30000);

  connection.on("message", async function (message) {
    if (message.type === "utf8") {
      console.log("Received Message: " + message.utf8Data);
      connection.sendUTF(message.utf8Data);
      if (
        clients.find((obj) => obj.remoteAddress === connection.remoteAddress)
      ) {
        clients[
          clients.findIndex(
            (obj) => obj.remoteAddress === connection.remoteAddress
          )
        ].currency = message.utf8Data;
        await sendStockData(connection);
      }
    } else if (message.type === "binary") {
      console.log(
        "Received Binary Message of " + message.binaryData.length + " bytes"
      );
      connection.sendBytes(message.binaryData);
    }
  });

  connection.on("close", function (reasonCode, description) {
    console.log(
      new Date() + " Peer " + connection.remoteAddress + " disconnected."
    );
    clients.splice(
      clients.findIndex((obj) => obj.remoteAddress === connection.remoteAddress)
    );
  });
});

async function sendStockData(connection){
  connection.sendUTF(
    await fetchData(
      (clients[
        clients.findIndex(
          (obj) => obj.remoteAddress === connection.remoteAddress
        )
      ] &&
        clients[
          clients.findIndex(
            (obj) => obj.remoteAddress === connection.remoteAddress
          )
        ].currency) ||
      "USD"
    )
  );
}
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

module.exports = {
  clients,
};
