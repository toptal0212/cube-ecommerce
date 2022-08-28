import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import NavbarRouter from "./components/routers/NavbarRouter";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import FooterLogoRouter from "./components/routers/FooterRouters/FooterLogoRouter";
import FooterNoLogoRouter from "./components/routers/FooterRouters/FooterNoLogoRouter";
import Success from "./pages/Success";
import { ItemCountProvider } from "./context/ItemCartContext";

function App() {
	return (
		<>
			<ItemCountProvider>
				<NavbarRouter />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop">
						<Route index element={<Shop />} />
						<Route path="product" element={<Product />} />
					</Route>
					<Route path="/orders" element={<Orders />} />
					<Route path="/success" element={<Success />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<FooterLogoRouter />
				<FooterNoLogoRouter />
			</ItemCountProvider>
		</>
	);
}

export default App;
