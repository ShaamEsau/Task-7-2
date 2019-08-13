/* Import React library to be used */
import React from "react";
/* Imports Style Sheet to style elements rendered from this page */
import "../cvStyles.css";


/* Creates an array */
const yearOne = [
		
			"Communication and Business Skills",
			"Introduction to C#",
			"Expression Blend",
			"T-SQL",
			"Programming in C#",
			"Essential Metro App Development",
			"Advance Metro Development",
			"Programming in HTML 5, CSS 3 and JavaScript"

		]

const yearTwo = [

			"Introduction to Project Management",
			"Database Development 1",
			"Servers",
			"Database Development 2",
			"Change Management",
			"Mobile Development"

		]

/* Creates functional component */
const TertEdu = () =>{
	return(

		/* Creates a div box */
	<div>		
		{/*Converts text to heading 2,3 and 4 format*/}
		<h2>Tertiary Education</h2>
		<h3>CTU Training Solutions</h3>
		<div>
		<h4>Year One</h4>
		{/*Creates a lable to store text*/}
		<label id="bioLab">Course : </label>
		{/* Creates a textbox that holds text and cannot be edited */}
		<input id="bioInf" value="MCSD" readonly/>
		</div>
		{/*Inserts a line space*/}
		<br/>
		<br/>

		<div>
		<label id="bioLab">Duration : </label>
		<input id="bioInf" value="January 2015 - November 2015" readonly/>
		</div>
		<br/>
		<br/>

		<div>
		<label id="bioLab">Course Content : </label>
		<br/>
		<br/>
		{/*Creates an unordered list*/}
		<ul>
		{/* Takes the values of an array and sets them as key-value pairs and displays each value as a list item */}
		{yearOne.map((item, key) => {

			return <li key={key}>{item}</li>;
		
		})}
		</ul>
		</div>
		<br/>
		<br/>

		<div>
		<h4>Year Two</h4>
		{/*Creates a lable to store text*/}
		<label id="bioLab">Course : </label>
		{/* Creates a textbox that holds text and cannot be edited */}
		<input id="bioInf" value="MCSE - BI" readonly/>
		</div>
		{/*Inserts a line space*/}
		<br/>
		<br/>

		<div>
		<label id="bioLab">Duration : </label>
		<input id="bioInf" value="January 2016 - November 2016" readonly/>
		</div>
		<br/>
		<br/>

		<div>
		<label id="bioLab">Course Content : </label>
		<br/>
		<br/>
		{/*Creates an unordered list*/}
		<ul>
		{/* Takes the values of an array and sets them as key-value pairs and displays each value as a list item */}
		{yearTwo.map((item, key) => {

			return <li key={key}>{item}</li>;
		
		})}
		</ul>
		</div>
		<br/>
		<br/>


	</div>

	);
}


export default TertEdu;