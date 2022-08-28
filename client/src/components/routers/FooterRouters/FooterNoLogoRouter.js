import { Routes, Route } from "react-router-dom";
import FooterNoLogo from "../../ui/FooterNoLogo";
const FooterNoLogoRouter = () => {
	return (
		<Routes>
			<Route path="/login" element={<FooterNoLogo />} />
			<Route path="/register" element={<FooterNoLogo />} />
			<Route path="*" element={<></>} />
		</Routes>
	);
};

export default FooterNoLogoRouter;
