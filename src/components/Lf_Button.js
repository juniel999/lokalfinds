import React from "react";
import "./Lf_Button.css";

const Lf_Button = () => {
	return (
		<div class="form">
			<input type="text" name="text" autocomplete="off" required />
			<label for="text" class="label-name">
				<span class="content-name">Looking For...</span>
			</label>
		</div>
	);
};

export default Lf_Button;
