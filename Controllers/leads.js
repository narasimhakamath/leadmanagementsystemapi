const Lead = require("../Models/lead");

// Function to create a new lead in the system.
exports.createLead = async (request, response, next) => {
	let responseData = {statusCode: 500, message: "Please try again as the request could not be processed."};

	// LOGIC HERE


	response.status(responseData['statusCode']).json(responseData);
}