const bcrypt = require('bcrypt');
var db = require('./../database-mysql/index');
var jwt = require('jsonwebtoken');
var config = require('./conging');
//////////////////////////
var payload = {};
exports.register = async function (req, res) {
	console.log(req.body);
	// if(req.body.name==="" || req.body.email ===""||req.body.password===""||req.body.phone===""){
	//   res.send("error")
	// }
	const password = req.body.password;
	const encryptedPassword = await bcrypt.hash(password, 10);
	let sql = 'INSERT INTO datauser SET ?';
	let post = {
		name: req.body.name,
		email: req.body.email,
		password: encryptedPassword,
		phone: req.body.phone,
	};
	db.connection.query(sql, post, function (error, results, fields) {
		if (error) {
			//return res.send(error);
			console.log(error);
		} else {
			res.send({
				code: 200,
				success: 'user registered sucessfully',
			});
		}
	});
}; ////////////////////////////////////////
exports.login = async function (req, res) {
	var email = req.body.email;
	var password = req.body.password;
	db.connection.query(
		'SELECT * FROM datauser WHERE email = ?',
		[email],
		async function (error, results, fields) {
			if (error) {
				res.send({
					code: 400,
					failed: 'error ocurred',
				});
			} else {
				if (results.length > 0) {
					const comparision = await bcrypt.compare(
						password,
						results[0].password,
					);
					if (comparision) {
						var user = {
							id: results[0].iduser,
							email: results[0].email,
							phone: results[0].phone,
							name: results[0].name,
						};
						var token = jwt.sign(user, config.secret);
						res.send({
							code: 200,
							success: 'login sucessfull',
							user: user,
							token: token,
						});
					} else {
						res.send({
							code: 204,
							success: 'Email and password does not match',
						});
					}
				} else {
					res.send({
						code: 206,
						success: 'Email does not exits',
					});
				}
			}
		},
	);
};
////////////////////////////////////////
exports.registerowner = async function (req, res) {
	const password = req.body.password;
	const encryptedPassword = await bcrypt.hash(password, 10);
	let sql = 'INSERT INTO dataowner SET ?';
	let post = {
		name: req.body.name,
		phone: req.body.phone,
		companyname: req.body.companyname,
		email: req.body.email,
		password: encryptedPassword,
		location: req.body.location,
	};
	db.connection.query(sql, post, function (error, results, fields) {
		if (error) {
			res.send(error);
		} else {
			res.send({
				code: 200,
				success: 'user registered sucessfully',
			});
		}
	});
};
///////////////////////////////////

//////////////////
exports.loginowner = async function (req, res) {
	var email = req.body.email;
	var password = req.body.password;
	db.connection.query(
		'SELECT * FROM dataowner WHERE email = ?',
		[email],
		async function (error, results, fields) {
			if (error) {
				res.send({
					code: 200,
					success: 'user registered sucessfully',
				});
			}
		},
	);
};

///////////////////////////////////

//////////////////
exports.loginowner = async function (req, res) {
	var email = req.body.email;
	var password = req.body.password;
	db.connection.query(
		'SELECT * FROM dataowner WHERE email = ?',
		[email],
		async function (error, results, fields) {
			if (error) {
				res.send({
					code: 400,
					failed: 'error ocurred',
				});
			} else {
				if (results.length > 0) {
					const comparision = await bcrypt.compare(
						password,
						results[0].password,
					);
					if (comparision) {
						var user = {
							id: results[0].idowner,
							email: results[0].email,
							name: results[0].name,
							phone: results[0].phone,
							companyname: results[0].companyname,
						};
						var token = jwt.sign(user, config.secret);
						res.send({
							code: 200,
							success: 'login sucessfull',
							token: token,
						});
					} else {
						res.send({
							code: 204,
							success: 'Email and password does not match',
						});
					}
				} else {
					res.send({
						code: 206,
						success: 'Email does not exits',
					});
				}
			}
		},
	);
};
