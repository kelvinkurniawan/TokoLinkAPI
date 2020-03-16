var express = require("express"),
	app = express(),
	port = process.env.PORT || 9000,
	bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var routes = require("./routes")
routes(app)

app.listen(port)
console.log("Connected on port: " + port)
