const mongoose = require("mongoose");

const leadSchema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	firstName: {type: String, required: true},
	lastName: {type: String},
	phoneNumber: {type: String, required: true},
	mailAddress: {type: String, required: true, unique: true},
	isConverted: {type: Boolean, default: false}
}, {
	timestamps: {createdAt: 'created_at'}
});

module.exports = mongoose.model("Lead", leadSchema);