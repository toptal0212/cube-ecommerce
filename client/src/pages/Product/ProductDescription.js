import React from "react";

const ProductDescription = (props) => {
    const description = props.description
    
	return (
		<div
			id="description"
			className="flex flex-col gap-2 text-center md:text-left"
		>
			<div id="about-header" className="flex gap-1 flex-col">
				<h1 className="font-medium">About this item</h1>
				<div id="line-break" className="h-[1px] w-full bg-lightGray"></div>
			</div>
			<div className="flex w-full justify-center">
				<p className="flex w-[95%]">{description}</p>
			</div>
		</div>
	);
};

export default ProductDescription;
