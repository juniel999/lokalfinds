import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const sectionVariant = {
	visible: { opacity: 1, transition: { duration: 0.5 } },
	hidden: { opacity: 0 },
};

const AboutSection = () => {
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
		<>
			<motion.div
				className="flex align-center flex-col items-center mt-5 px-[20px]"
				ref={ref}
				variants={sectionVariant}
				initial="hidden"
				animate={control}
			>
				<img
					src="/imgs/logo-2.jpg"
					alt="lokalfind logo"
					className="h-[209px]"
				/>
				<h2 className="md:text-[2rem]">INTRODUCING</h2>
				<h2 className="font-['CustomGistesy'] text-[52.5px] md:text-[6rem]">
					Lokal Finds
				</h2>
				<h3 className="font-['Calibri'] text-[11px] py-4 md:text-[1rem]">
					FEATURING FILIPINO-MADE PRODUCTS ONLY!
				</h3>
				<p className="font-['Times'] italic text-[11px] text-center mb-5 md:text-[1.2rem]">
					Craving a certain food or looking for <br />a unique piece to wear?
				</p>
				<p className="font-['Times'] italic text-[11px] font-bold text-center mb-20 md:text-[1.2rem]">
					Lokal Finds makes it easier to find <br />
					local businesses that satisfy your needs!
				</p>
			</motion.div>
		</>
	);
};

export default AboutSection;
