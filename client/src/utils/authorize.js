import server_url from "../config/server";

// Authorize token
const authorize = async (token) => {
	const res = await fetch(`${server_url}/api/authorize/token`, {
		method: "GET",
		headers: { authorization: `Bearer ${token}` },
	});
	const data = await res.json();

	if (data.success === true) {
		return true;
	} else {
		return false;
	}
};

export default authorize;
