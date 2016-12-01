const express = require('express');
const router = express.Router();
const cms = require('../cms.js');
module.exports = router;
router.get('/', function(req, res) {

	//checks if the user is logged in
	if (!req.session || !req.session.cas_user) {
		res.json({
			username: null,
			first_name: false
		});
		return;
	}
	var rcs_id = req.session.cas_user.toLowerCase();

	//parse user_data
	cms.getRCS(rcs_id).then(function(user_data) {
		user_data = JSON.parse(user_data);
		// username, student_id (is rin), last_name, middle_name, user_type
		res.json({
			username: rcs_id,
			first_name: user_data.preferred_name || user_data.first_name
		});
	});
});