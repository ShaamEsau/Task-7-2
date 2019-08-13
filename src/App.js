/* Imports React library */
import React from 'react';
import logo from './logo.svg';
/* Imports JS files to be used on the page */
import Header from "./Components/Header.js";
import Bio from "./Components/Profile.js";
import School from "./Components/HighSchool.js";
import FET from "./Components/TertiaryEdu.js";
import WorkExp from "./Components/WorkExp.js";

function App() {
  return (
    /* Creates a div box */
    <div className="App">
        {/* Calls the component that has been imported*/}
        <Header/>
        {/* Adds a white space */}
        <br/>
        <Bio/>
        <br/>
        <School/>
        <br/>
        <FET/>
        <br/>
        <WorkExp/>
    </div>
  );
}


/* Allows the component in this page to be imported and used in another file */
export default App;
