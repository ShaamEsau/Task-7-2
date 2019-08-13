/* Import React library to be used */
import React from "react";
import Image from "react-bootstrap/Image";
/* Imports Style Sheet to style elements rendered from this page */
import "../cvStyles.css";
/* Imports image to be used */
import ProfPic from "../Images/prof.png";


/* Creates Functional Component */
const Bio = () => {
	return(
	/* Creates a div box */
	<div>
		{/* Converts text to heading 2 format */}
		<h2>Bio</h2><br/>
		<div className="row" id="bioDis">
	 {/*Inserts an image using the imported image file */}
	 	<div className="col-md-4">
		<Image id="profPic" src={ProfPic} rounded/>
		</div>

		<br/>
		<div className="col-lg-8">
		<div id="bioBox">
		{/* Creates a label to hold text */}
		<label id="bioLab">Full Name : </label>
		{/* Creates a textbox that holds text and cannot be edited */}
		<input id="bioInf" value="Mogamat Hishaam" readonly/>
		</div>

		<br/>
		<br/>
		<div id="bioBox">
		<label id="bioLab">Surname : </label>
		<input id="bioInf" value="Esau" readonly/>
		</div>

		<br/>
		<br/>
		<div id="bioBox">
		<label id="bioLab">Date of Birth : </label>
		<input id="bioInf" value="10 March 1996" readonly/>
		</div>

		<br/>
		<br/>
		<div id="bioBox">
		<label id="bioLab">Gender : </label>
		<input id="bioInf" value="Male" readonly/>

		<br/>
		<br/>
		<div id="bioBox">
		<label id="bioLab">Nationality : </label>
		<input id="bioInf" value="South African" readonly/>
		</div>

		<br/>
		<br/>
		<div id="bioBox">
		<label id="bioLab">Languages : </label>
		<input id="bioInf" value="English / Afrikaans" readonly/>
		</div>

		<br/>
		<br/>
		<div id="bioBox">
		<label id="bioLab">Cell Number : </label>
		<input id="bioInf" value="074 480 5473" readonly/>
		</div>

		<br/>
		<br/>
		<div id="bioBox">
		<label id="bioLab">Email Address : </label>
		<input id="bioInf" value="hishaamesau@gmail.com" readonly/>
		</div>
		</div>

		</div>
		</div>
	</div>
	);
}


/* Allows the component in this page to be imported and used in another file */
export default Bio;