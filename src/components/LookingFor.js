import React, { useState, useEffect } from "react";
import DATA from "../DATA.json";
import Product from "./Product";
import "./LookingFor.css";

const LookingFor = () => {
	const [word, setWord] = useState("");
	const [selectedCategory, setSelectedCategory] = useState("");

	useEffect(() => {
		console.log(selectedCategory);
	}, [selectedCategory]);

	return (
		<div className="px-[20px] my-5 min-h-[40vh] mx-auto max-w-6xl">
			<div className="my-10">
				<input
					type="text"
					className="form__input md:text-base"
					id="name"
					placeholder="Looking for?"
					autoComplete="off"
					onChange={(e) => setWord(e.target.value)}
				/>
				<label className="text-xs md:text-base ml-8 md:ml-[80px] lg:ml-[120px]">
					Filter by:
					<select
						name="category"
						onChange={(e) => setSelectedCategory(e.target.value)}
						className="text-xs md:text-base ml-2 mt-3"
					>
						<option value="all">All</option>
						<option value="business">Business Name</option>
						<option value="location">Location</option>
						<option value="about">About the business</option>
					</select>
				</label>
			</div>
			{DATA.filter((product) => {
				if (word === "") {
					return null;
				} else if (
					product.business_name.toLowerCase().includes(word.toLowerCase()) ||
					product.about.toLowerCase().includes(word.toLowerCase()) ||
					product.location.toLowerCase().includes(word.toLowerCase())
				) {
					return product;
				}
			})
				.filter((product) => {
					if (selectedCategory === "") {
						return product;
					} else {
						if (selectedCategory === "location") {
							if (product.location.toLowerCase().includes(word.toLowerCase())) {
								return product;
							}
						} else if (selectedCategory === "about") {
							if (product.about.toLowerCase().includes(word.toLowerCase())) {
								return product;
							}
						} else if (selectedCategory === "business") {
							if (
								product.business_name.toLowerCase().includes(word.toLowerCase())
							) {
								return product;
							}
						} else if (selectedCategory === "all") {
							if (
								product.business_name
									.toLowerCase()
									.includes(word.toLowerCase()) ||
								product.about.toLowerCase().includes(word.toLowerCase()) ||
								product.location.toLowerCase().includes(word.toLowerCase())
							) {
								return product;
							}
						}
					}
				})
				.map((product) => (
					<Product
						key={product.img}
						location={product.location}
						img_url={product.img}
						urls={product.urls}
						about={product.about}
						name={product.business_name}
					/>
				))}
		</div>
	);
};

export default LookingFor;
