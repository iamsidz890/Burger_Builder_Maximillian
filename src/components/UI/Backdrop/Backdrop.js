import React from "react";

import classes from "./Backdrop.css";

const backdrop = (props) =>
	props.show ? (
		<div className={classes.Backdrop} onClick={props.clicked}></div>
	) : null;
// null just means nothing gets rendered...in modal if modal shown backdop shwn

export default backdrop;
