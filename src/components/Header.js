import React from "react";
import { Link } from "react-router-dom";
import LfButton from "./LfButton";

const Header = () => {
	return (
		<header className="flex justify-between items-center px-[20px] mx-auto max-w-6xl">
			<Link to="/" className="">
				<img
					src="/imgs/logo-1.png"
					alt="lokalfind logo"
					className="h-[107px] object-contain md:h-[140px] md:w-[140px] w-[140px] mx-[-10px]"
				/>
			</Link>
			<div className="flex flex-col space-y-2 w-100">
				<Link to="/lookingfor" className="text-right">
					<LfButton />
				</Link>
				<ul className="flex space-x-2 text-xs md:text-base">
					<li>
						<Link to="foods">Food</Link>
					</li>
					<li>
						<Link to="clothing">Clothing</Link>
					</li>
					<li>
						<Link to="accessories">Accessories</Link>
					</li>
					<li>
						<Link to="more">More</Link>
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Header;
