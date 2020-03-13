"use strict"

module.exports = function(app) {
	var UsersApi = require("./api/Users")
	var TokoApi = require("./api/Toko")

	app.route("/").get(UsersApi.index)

	// User Routes
	app.route("/users").get(UsersApi.users)
	app.route("/users/:id").get(UsersApi.findUsers)
	app.route("/users").post(UsersApi.createUsers)
	app.route("/users").put(UsersApi.updateUsers)
	app.route("/users").delete(UsersApi.deleteUsers)

	// Toko Routes
	app.route("/toko").get(TokoApi.toko)
	app.route("/toko/:id").get(TokoApi.findToko)
	app.route("/toko").post(TokoApi.createToko)
	app.route("/toko").put(TokoApi.updateToko)
	app.route("/toko").delete(TokoApi.deleteToko)
}
