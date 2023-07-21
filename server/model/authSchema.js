const mongoose = require("mongoose");

const authSchema = new mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	email: {
		type: String,
		require: true,
        unique: true
	},
	number: {
		type: Number,
		require: true,
	},
	password: {
		type: String,
		require: true,
	}
	
});

const AuthSchema = new mongoose.model("auth-users", authSchema);

module.exports = AuthSchema;