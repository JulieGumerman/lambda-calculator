import React from "react";
import {specials} from "../../../data.js";
import SpecialButton from "./SpecialButton";


//import any components needed

//Import your array data to from the provided data file

const Specials = props => {

  let specialCharacters = specials.map(character => {
    return <SpecialButton clearDisplay={props.clearDisplay} character={character}/>
  })
  // STEP 2 - add the imported data to state

  return (
    console.log(specials),
    <div class="specials">

      {specialCharacters}

    
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Specials;