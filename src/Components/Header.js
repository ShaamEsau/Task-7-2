/* Import React library to be used */
import React from "react";

/* Creates Functional Component */
const Header = () => {
	return(
	/* Creates a div box */
	<div>
		{/* Converts text to heading 1 format */}
		<h1 id="Title">Curriculum Vitae of Mogamat Hishaam Esau</h1>
		<hr/>
	</div>
	);
}

/* Allows the component in this page to be imported and used in another file */
export default Header;

