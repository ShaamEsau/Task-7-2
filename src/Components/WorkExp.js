/* Import React library to be used */
import React from "react";
/* Imports Style Sheet to style elements rendered from this page */
import "../cvStyles.css";


/* Creates an array */
const duties = [
		
		"Telephonic and Electronic Customer Support for Amazon Devices",
		"Troubleshooting and Assisting customer with setting up Amazon Devices"

]

const WorkExp = () => {

	return(

		/* Creates a div box */
		<div>
			{/*Converts text to heading 2 and 3 format*/}
			<h2>Employment History</h2>
			<h3>Amazon</h3>
			<div>

			<label id="bioLab">Period : </label>
			{/* Creates a textbox that holds text and cannot be edited */}
			<input id="bioInf" value="25 October 2017 - 1 September 2018" readonly/>
			</div>
			{/*Inserts a line space*/}
			<br/>
			<br/>

			<div>
			<label id="bioLab">Employment : </label>
			{/* Creates a textbox that holds text and cannot be edited */}
			<input id="bioInf" value="Contract" readonly/>
			</div>
			{/*Inserts a line space*/}
			<br/>
			<br/>

			<div>
			<label id="bioLab">Duties : </label>
			{/* Creates a textbox that holds text and cannot be edited */}
			<br/>
			<br/>

			{/* Creates an unordered list */}
			<ul> 
		 	{/* Takes the values of an array and sets them as key-value pairs and displays each value as a list item */}
			{duties.map((item, key) => {

				return <li key={key}>{item}</li>;
			
			})}
			</ul>
			</div>
			{/*Inserts a line space*/}
			<br/>
			<br/>


			<div>
			<label id="bioLab">Reference : </label>
			{/* Creates a textbox that holds text and cannot be edited */}
			<input id="bioInf" value="Ryan Abrahams - 081 769 5417" readonly/>
			</div>
			{/*Inserts a line space*/}
			<br/>
			<br/>

		</div>

	)

}

/* Allows the component in this page to be imported and used in another file */
export default WorkExp;