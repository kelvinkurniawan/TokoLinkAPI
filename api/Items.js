"use strict"

var response = require("../core/res")
var connection = require("../core/conn")

exports.items = function(req, res) {
	connection.query("SELECT * FROM items", function(error, rows, fields) {
		if (error) {
			console.log(error)
		} else {
			response.ok(rows, res)
		}
	})
}

exports.findItems = function(req, res) {
	var _id = req.params.id

	connection.query("SELECT * FROM items where id = ?", [_id], function(
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

exports.createItem = function(req, res) {
	var _name = req.body.name
	var _price = req.body.price
	var _stock = req.body.stock
	var _img_path = req.body.img_path
	var _toko_id = req.body.toko_id

	connection.query(
		"INSERT INTO items (name, price, stock, img_path, toko_id) values (?, ?, ?, ?, ?)",
		[_name, _price, _stock, _img_path, _toko_id],
		function(error, rows, fields) {
			if (error) {
				console.log(error)
			} else {
				response.ok("Items created!", res)
			}
		},
	)
}

exports.updateItem = function(req, res) {
	var _id = req.body.id
	var _name = req.body.name
	var _price = req.body.price
	var _stock = req.body.stock
	var _img_path = req.body.img_path
	var _toko_id = req.body.toko_id

	connection.query(
		"UPDATE items set name = ?, price = ?, stock = ?, img_path = ?, toko_id = ? WHERE id = ?",
		[_name, _price, _stock, _img_path, _toko_id, _id],
		function(error, rows, fields) {
			if (error) {
				console.log(error)
			} else {
				response.ok("Items Updated!", res)
			}
		},
	)
}

exports.deleteItems = function(req, res) {
	var _id = req.body.id

	connection.query("DELETE FROM items WHERE id = ?", [_id], function(
		error,
		rows,
		fields,
	) {
		if (error) {
			console.log(error)
		} else {
			response.ok("Items deleted!", res)
		}
	})
}
