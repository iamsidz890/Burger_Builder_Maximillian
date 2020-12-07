import React from "react";
// make webpack aware of that we are using this image
import burgerLogo from "../../image/burger-logo.png";
import classes from "./Logo.css";
const logo = (props) => (
	<div className={classes.Logo}>
		<img src={burgerLogo} />
		{/* set this dynamically cuz webpack will nsjbgsf */}
	</div>
);
export default logo;
