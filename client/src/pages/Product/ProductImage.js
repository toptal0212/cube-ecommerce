import React from "react";

const ProductImage = (props) => {
	const image = props.image;
	return (
		<div
			id="image"
			className="flex justify-center rounded-md border-4 border-lightGray w-64 xxsm:w-80 xsm:w-96 md:w-[28rem] lg:w-[36rem] xl:w-[40rem]"
		>
			<img src={image} alt="product" />
		</div>
	);
};

export default ProductImage;
