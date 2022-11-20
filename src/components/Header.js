import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className="flex justify-between items-center px-[20px] mx-auto max-w-6xl">
			<Link to="/" className="">
				<img
					src="/imgs/logo-1.png"
					alt="lokalfind logo"
					className="h-[107px] w-[107px] mx-[-10px]"
				/>
			</Link>
			<ul className="flex space-x-2 text-xs">
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
		</header>
	);
};

export default Header;
