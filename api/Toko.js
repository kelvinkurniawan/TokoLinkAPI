"use strict"

var response = require("../core/res")
var connection = require("../core/conn")

exports.toko = function(req, res) {
	connection.query("SELECT * FROM toko", function(error, rows, fields) {
		if (error) {
			console.log(error)
		} else {
			response.ok(rows, res)
		}
	})
}

exports.findToko = function(req, res) {
	var id = req.params.id

	connection.query("SELECT * FROM toko where id = ?", [id], function(
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

exports.createToko = function(req, res) {
	var _name = req.body.name
	var _addresses = req.body.addresses
	var _latitude = req.body.latitude
	var _longitude = req.body.longitude

	connection.query(
		"INSERT INTO toko (name, addresses, latitude, longitude) values (?,?,?,?)",
		[_name, _addresses, _latitude, _longitude],
		function(error, rows, fields) {
			if (error) {
				console.log(error)
			} else {
				response.ok("Toko created!", res)
			}
		},
	)
}

exports.updateToko = function(req, res) {
	var _id = req.body.id
	var _name = req.body.name
	var _addresses = req.body.addresses
	var _latitude = req.body.latitude
	var _longitude = req.body.longitude

	connection.query(
		"UPDATE toko SET name = ?, addresses = ?, latitude = ?, longitude = ? WHERE id = ?",
		[_name, _addresses, _latitude, _longitude, _id],
		function(error, rows, fields) {
			if (error) {
				console.log(error)
			} else {
				response.ok("Update success!", res)
			}
		},
	)
}

exports.deleteToko = function(req, res) {
	var _id = req.body.id

	connection.query("DELETE FROM toko WHERE id = ?", [_id], function(
		error,
		rows,
		fields,
	) {
		if (error) {
			console.log(error)
		} else {
			response.ok("Toko deleted!", res)
		}
	})
}

exports.index = function(req, res) {
	response.ok("Hello you are connected to TokoLink API", res)
}
