import React from "react";
import DATA from "../DATA.json";
import Product from "./Product";

const ClothingSection = () => {
	return (
		<div className="px-[20px] my-5 mx-auto max-w-6xl">
			<div className="flex flex-col">
				<img
					src="/imgs/clothing_logo.png"
					alt="foodsection logo"
					className="w-[75px] h-[51px]"
				/>
				<h1 className="text-2xl font-bold mb-10 tracking-widest text-red-500">
					CLOTHING
				</h1>
				{DATA.filter((product) => product.category === "clothing").map(
					(product) => (
						<Product
							key={product.img}
							location={product.location}
							img_url={product.img}
							urls={product.urls}
							about={product.about}
							name={product.business_name}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default ClothingSection;
