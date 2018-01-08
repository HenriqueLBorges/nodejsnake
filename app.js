var app = require("./config/server.js");

var server_port = process.env.YOUR_PORT || process.env.PORT || 3000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

app.get('/', function (req, res) {
    res.render('index');
});
app.listen(server_port, server_host, function () {
    console.log("Server online.")
});