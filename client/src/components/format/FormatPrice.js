import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";

const FormatPrice = (props) => {
	return (
		<div className="flex relative">
			<FontAwesomeIcon
				icon={faDollarSign}
				size="xs"
				className="relative top-[0.375rem]"
			/>
			<p className="font-medium text-xl w-3/4">{props.price}</p>
		</div>
	);
};

export default FormatPrice;
