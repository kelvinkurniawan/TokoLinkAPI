"use strict"

var response = require("../core/res")
var connection = require("../core/conn")

exports.users = function(req, res) {
	connection.query("SELECT * FROM users", function(error, rows, fields) {
		if (error) {
			console.log(error)
		} else {
			response.ok(rows, res)
		}
	})
}

exports.findUsers = function(req, res) {
	var id = req.params.id

	connection.query("SELECT * FROM users where id = ?", [id], function(
		error,
		rows,
		fields,
	) {
		if (error) {
			console.log(error)
		} else {
			response.ok(rows, res)
		}
	})
}

exports.createUsers = function(req, res) {
	var _firstName = req.body.firstName
	var _lastName = req.body.lastName
	var _email = req.body.email
	var _phone = req.body.phone
	var _username = req.body.username
	var _password = req.body.password
	var _role = req.body.role

	connection.query(
		"INSERT INTO users (firstName, lastName, email, phone, username, password, role) values (?,?,?,?,?,?,?)",
		[_firstName, _lastName, _email, _phone, _username, _password, _role],
		function(error, rows, fields) {
			if (error) {
				console.log(error)
			} else {
				response.ok("User created!", res)
			}
		},
	)
}

exports.updateUsers = function(req, res) {
	var _id = req.body.id
	var _firstName = req.body.firstName
	var _lastName = req.body.lastName
	var _email = req.body.email
	var _phone = req.body.phone
	var _username = req.body.username
	var _password = req.body.password
	var _role = req.body.role

	connection.query(
		"UPDATE users SET firstName = ?, lastName = ?, email = ?, phone = ?, username = ?, password = ?, role = ? WHERE id = ?",
		[_firstName, _lastName, _email, _phone, _username, _password, _role, _id],
		function(error, rows, fields) {
			if (error) {
				console.log(error)
			} else {
				response.ok("Update success!", res)
			}
		},
	)
}

exports.deleteUsers = function(req, res) {
	var _id = req.body.id

	connection.query("DELETE FROM users WHERE id = ?", [_id], function(
		error,
		rows,
		fields,
	) {
		if (error) {
			console.log(error)
		} else {
			response.ok("Users deleted!", res)
		}
	})
}

exports.index = function(req, res) {
	response.ok("Hello you are connected to TokoLink API", res)
}
