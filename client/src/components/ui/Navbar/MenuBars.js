import React from "react";

const MenuBars = (props) => {
	return (
		<>
			<div id="burger" onClick={props.showMobileMenu} className="cursor-pointer fixed">
				<div
					id="line-one"
					className={`burger-line transition-all transform ${
						props.showMenu
							? "-rotate-45 translate-x-[-0px] ease-in-out duration-300 translate-y-[7px]"
							: "rotate-0"
					}`}
				></div>
				<div
					id="line-two"
					className={`burger-line transition-all ease-in-out duration-300 transform ${
						props.showMenu && "opacity-0"
					}`}
				></div>
				<div
					id="line-three"
					className={`burger-line transition-all transform ${
						props.showMenu
							? "rotate-45 translate-x-[-0px] ease-in-out duration-300 translate-y-[-7px]"
							: "rotate-0"
					}`}
				></div>
			</div>
		</>
	);
};

export default MenuBars;
