import React from "react";
import "./LfButton.css";
import SearchIcon from "@mui/icons-material/Search";

const LfButton = () => {
	return (
		<button className="button-49 relative text-xs md:text-base">
			<SearchIcon /> Looking For...
		</button>
	);
};

export default LfButton;
