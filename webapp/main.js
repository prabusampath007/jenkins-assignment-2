const fs = require('fs');
const http = require("http");
var mysql = require("mysql2");
const hostname = "0.0.0.0";
const webAppPort = process.env.WEB_APP_PORT;
const mysqlHostname = process.env.MYSQL_HOSTNAME;
const mysqlPassword = process.env.MYSQL_PASSWORD;
console.log(webAppPort);
console.log(mysqlHostname);
console.log(mysqlPassword)

const server = http.createServer((req, res) => {
  console.log('Request received');
  let dbResult;
  var con = mysql.createConnection({
    host: mysqlHostname,
    user: "root",
    password: mysqlPassword,
    port: 3306,
  });
  con.connect(function (err) {
    if (err) console.log(err);
    console.log("Connected!");
    var sql = "select * from app.user";
    con.query(sql, function (err, result) {
      if (err) throw err;
      dbResult = result;
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      console.log(dbResult);
      res.end(JSON.stringify(dbResult));
    });
  });
});

server.listen(webAppPort, hostname, () => {
  console.log(`Server running at http://${hostname}:${webAppPort}/`);
});
