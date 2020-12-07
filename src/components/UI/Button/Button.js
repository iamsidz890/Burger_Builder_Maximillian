import React from "react";

import classes from "./Button.css";
// think of this as hoc

const button = (props) => (
	<button
		className={[classes.Button, classes[props.btnType]].join(" ")}
		// outsourcing btntype from the <Button> in ordersummarys</Button>
		onClick={props.clicked}>
		{props.children}
	</button>
);

export default button;
