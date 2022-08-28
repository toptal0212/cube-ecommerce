import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Password = (props) => {
	return (
		<>
			<div id="password" className="flex flex-col w-4/5 gap-1 ">
								<label
									htmlFor="password"
									className="font-medium text-lightishBlack text-sm"
								>
									Password
								</label>
								<div className="flex items-center relative">
									<input
										type={props.visible ? "text" : "password"}
										name="password"
										value={props.password}
										onChange={props.changePasswordValue}
										className="border-lightishGray rounded-md border-2 py-1 px-4 outline-none w-full transition-all ease-out duration-300 focus:outline-lightishBlue outline-4 outline-offset-0 text-base"
									/>
									{props.password && (
										<FontAwesomeIcon
											icon={props.visible ? faEyeSlash : faEye}
											color="#242424"
											onClick={props.toggleVisible}
											className="absolute right-2 cursor-pointer"
										></FontAwesomeIcon>
									)}
								</div>
							</div>
		</>
	);
};

export default Password;
