import React, { useState } from "react";

//Routers
import { useNavigate } from "react-router-dom";

// Components
import Username from "../../components/forms/Username";
import Password from "../../components/forms/Password";
import CubeLogo from "../../components/ui/CubeLogo";
import AccountBackground from "../../components/ui/AccountBackground";
import DashedLinesLogin from "./DashedLinesLogin";
import ButtonForm from "../../components/forms/ButtonForm";
import LoginMessage from "./LoginMessage";
import Signup from "./Signup";
import server_url from "../../config/server";

const Login = () => {
	const [visible, setVisble] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const [message, setMessage] = useState("");
	const [waitForForm, setWaitForForm] = useState(false);

	const navigate = useNavigate();

	const toggleVisible = () => {
		setVisble((prevValue) => !prevValue);
	};

	const login = async (event) => {
		event.preventDefault();
		try {
			if (!waitForForm) {
				setWaitForForm((prev) => !prev);

				const res = await fetch(`${server_url}/api/login`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ username, password }),
				});

				const data = await res.json();

				setMessage(data.msg);

				if (data.success === true) {
					localStorage.setItem("token", data.token);
					navigate("/");
				}

				setTimeout(() => {
					setMessage("");
					setWaitForForm((prev) => !prev);
				}, 2000);
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	return (
		<>
			<section id="register">
				<div
					id="register-vertical-container"
					className="fixed left-1/2 transform translate-x-[-50%] translate-y-[-50%] w-64 top-[45%] md:w-[36rem] sm:w-[28rem] xxsm:w-[22rem] xsm:w-96 flex justify-center flex-col gap-4"
				>
					<div id="logo" className="flex justify-self-start">
						<CubeLogo />
					</div>
					<div
						id="register-container"
						className="py-8 form-shadow w-full bg-white flex"
					>
						<form className="flex flex-col w-full justify-center items-center gap-6">
							<h1 className="text-2xl font-semibold w-4/5">
								Sign in to your account
							</h1>
							<Username
								username={username}
								changeUsernameValue={(event) => setUsername(event.target.value)}
							/>
							<Password
								visible={visible}
								toggleVisible={toggleVisible}
								password={password}
								changePasswordValue={(event) => setPassword(event.target.value)}
							/>
							<LoginMessage message={message} />
							<ButtonForm action={login} text="Continue" />
						</form>
					</div>
					<Signup />
					<DashedLinesLogin />
				</div>
			</section>
			<AccountBackground></AccountBackground>
		</>
	);
};

export default Login;
