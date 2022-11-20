import React from "react";

const AboutSection = () => {
	return (
		<div
			className="flex align-center flex-col items-center mt-5 px-[20px]"
			id="about"
		>
			<h1 className="text-[20px]">About</h1>
			<img src="/imgs/logo-2.jpg" alt="lokalfind logo" className="h-[209px]" />
			<h2>INTRODUCING</h2>
			<h2 className="font-['CustomGistesy'] text-[52.5px]">Lokal Finds</h2>
			<h3 className="font-['Calibri] text-[11px] py-4">
				FEATURING FILIPINO-MADE PRODUCTS ONLY!
			</h3>
			<p className="font-['Times'] italic text-[11px] text-center mb-10">
				Whether you are craving a certain food or looking for a <br />
				unique piece to wear to your next conference, Lokal Finds <br /> makes
				it easier to find local businesses that satisfy your <br />
				needs!
			</p>
		</div>
	);
};

export default AboutSection;
