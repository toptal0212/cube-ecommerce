import React, { useState } from "react";

// Routers
import { useNavigate } from "react-router-dom";

// Components
import CubeLogo from "../../components/ui/CubeLogo";
import AccountBackground from "../../components/ui/AccountBackground";
import DashedLinesRegister from "./DashedLinesRegister";
import Username from "../../components/forms/Username";
import Password from "../../components/forms/Password";
import ConfirmPassword from "../../components/forms/ConfirmPassword";
import ButtonForm from "../../components/forms/ButtonForm";

import server_url from "../../config/server";

const Register = () => {
	const [visible, setVisble] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	// Error message
	const [message, setMessage] = useState("");
	// Successful message
	const [createMsg, setCreateMsg] = useState("");
	// To keep from spamming button
	const [waitForForm, setWaitForForm] = useState(false);

	const navigate = useNavigate();

	const createAccount = async (event) => {
		event.preventDefault();

		try {
			if (!waitForForm) {
				setWaitForForm((prev) => !prev);
				const res = await fetch(`${server_url}/api/register`, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({ username, password, confirmPassword }),
				});

				const data = await res.json();

				setMessage(data.msg);
				setCreateMsg(data.createMsg);

				setTimeout(() => {
					if (data.success === true) {
						navigate("/login");
					}
					setWaitForForm((prev) => !prev);
					setMessage("");
				}, 2000);
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	// Toggle to see password
	const toggleVisible = () => {
		setVisble((prevValue) => !prevValue);
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
								Create your Cube account
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
							<ConfirmPassword
								visible={visible}
								changeConfirmPasswordValue={(event) =>
									setConfirmPassword(event.target.value)
								}
								confirmPassword={confirmPassword}
							/>
							{message && (
								<p className="text-redError text-center">{message}</p>
							)}
							{createMsg && (
								<p className="text-greenSuccess text-center">{createMsg}</p>
							)}
							<ButtonForm action={createAccount} text="Create account" />
						</form>
					</div>
					<DashedLinesRegister />
				</div>
			</section>
			<AccountBackground></AccountBackground>
		</>
	);
};

export default Register;
