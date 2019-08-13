/* Import React library to be used */
import React from "react";
/* Imports Style Sheet to style elements rendered from this page */
import "../cvStyles.css";

/* Creates an array */
const highSubs = [
					"English First Additional Language", 
					"Afrikaans Second Language", 
					"Mathematics",
					"Physical Science",
					"Geography",
					"Computer Application Technology",
					"Life Orientation"
				]

/* Creates functional component */
const HighEdu = () =>{
	return(

		/* Creates a div box */
		<div>		
			{/*Converts text to heading 2 format*/}
			<h2>High School</h2>

			<div>
			{/*Creates a lable to store text*/}
			<label id="bioLab">Attending School : </label>
			{/* Creates a textbox that holds text and cannot be edited */}
			<input id="bioInf" value="Rocklands High School" readonly/>
			</div>
			{/*Inserts a line space*/}
			<br/>
			<br/>

			<div>
			<label id="bioLab">Highest Grade Passed : </label>
			<input id="bioInf" value="12" readonly/>
			</div>
			<br/>
			<br/>

			<div>
			<label id="bioLab">Year Graduated : </label>
			<input id="bioInf" value="2014" readonly/>
			</div>
			<br/>
			<br/>

			<div>
			<label id="bioLab">Subjects : </label>
			<br/>
			<br/>
			{/*Creates an unordered list*/}
			<ul>
			{/* Takes the values of an array and sets them as key-value pairs and displays each value as a list item */}
			{highSubs.map((item, key) => {

				return <li key={key}>{item}</li>;
			
			})}
			</ul>
			</div>
			<br/>
			<br/>
		</div>

	);
}


/* Allows the component in this page to be imported and used in another file */
export default HighEdu;

