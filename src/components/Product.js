import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";

const productVariant = {
	visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.5 } },
	hidden: { opacity: 0, scale: 0, x: 90 },
};

const Product = ({ location, img_url, name, urls, about }) => {
	const control = useAnimation();
	const [ref, inView] = useInView();

	useEffect(() => {
		if (inView) {
			control.start("visible");
		} else {
			control.start("hidden");
		}
	}, [control, inView]);

	return (
		<motion.div
			className="flex flex-col my-2 items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
			ref={ref}
			variants={productVariant}
			initial="hidden"
			animate={control}
		>
			<img
				className="object-cover w-full rounded-t-lg h-50 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
				src={img_url}
				alt={name + " image"}
			></img>
			<div className="flex flex-col justify-between p-4 leading-normal">
				<h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
					{name}
				</h5>
				<h6 className="mb-2 text-xs">{location}</h6>
				<p className="mb-3 font-normal text-xs md:text-normal text-gray-700 dark:text-gray-400">
					{about}
				</p>
				<p>
					Links:{" "}
					{urls.lazada ? (
						<a
							href={urls.lazada}
							key={urls.lazada}
							className="text-xs block text-blue-600 inline-block align-middle"
						>
							<img
								src="/imgs/lazada.png"
								alt="lazada logo"
								className="h-[20px]"
							/>
						</a>
					) : (
						""
					)}
					{urls.instagram ? (
						<a
							href={urls.instagram}
							key={urls.instagram}
							className="text-xs block text-blue-600 inline-block align-middle"
						>
							<InstagramIcon />
						</a>
					) : (
						""
					)}
					{urls.facebook ? (
						<a
							href={urls.facebook}
							key={urls.facebook}
							className="text-xs block text-blue-600 inline-block align-middle"
						>
							<FacebookIcon />
						</a>
					) : (
						""
					)}
					{urls.web ? (
						<a
							href={urls.web}
							key={urls.web}
							className="text-xs block text-blue-600 inline-block align-middle"
						>
							<LanguageIcon />
						</a>
					) : (
						""
					)}
				</p>
			</div>
		</motion.div>
	);
};

export default Product;
