import React from "react";

const Footer = () => {
	return (
		<footer className="bg-blue-700 min-h-[220px] flex items-center">
			<div className="max-w-6xl mx-auto">
				<div className="flex justify-between w-full p-5 space-x-5">
					<div className="flex flex-col">
						<h5 className="text-yellow-300">For more information</h5>
						<p className="text-xs">Email</p>
						<p className="text-xs text-white">russelle_mirasol@dlsu.edu.ph</p>
						<p className="text-xs">Phone Number</p>
						<p className="text-xs text-white">09664638405</p>
					</div>
					<div className="flex flex-col">
						<h5 className="text-yellow-300">
							Are you selling locally made produts?
						</h5>
						<a
							href="https://forms.gle/QJcKBy5pjSufXKWN9"
							className="text-xs text-white"
						>
							Be a part of this website!
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
