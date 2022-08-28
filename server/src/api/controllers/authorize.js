// Models
const { getUserId } = require("../models/authorize");

const authorizeToken = async (req, res) => {
	try {
		const user = req.user;

		const userId = await getUserId(user.userId);

		if (!userId) {
			return res.status(401).json({ success: false });
		}

		return res.status(200).json({ success: true, data: user });
        
	} catch (error) {
		return res.status(500).json({ success: false, msg: error.message });
	}
};

module.exports = { authorizeToken };
