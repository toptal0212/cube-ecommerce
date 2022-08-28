import server_url from "../config/server";

const createCheckoutSession = async (event, token) => {
	try {
		const res = await fetch(`${server_url}/api/checkout`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				authorization: `Bearer ${token}`,
			},
		});
		if (res.ok) {
			const url = await res.json();
			window.location = url;
		} else {
			await Promise.reject(await res.json());
		}
	} catch (error) {
		return console.log(error.message);
	}
};

export default createCheckoutSession;
