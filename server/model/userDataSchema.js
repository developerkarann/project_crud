const mongoose = require("mongoose");

const userDataSchema = new mongoose.Schema({
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
	position: {
		type: String,
		require: true,
	}
	
});

const UserData = new mongoose.model("users", userDataSchema);

module.exports = UserData;