import React from "react";

const Conditional=()=>{
  return (
    <React.Fragment>
      <Netflix2></Netflix2>
      <Netflix2></Netflix2>
      <Netflix2></Netflix2>
      <Netflix2></Netflix2>
      <Netflix2></Netflix2>
    </React.Fragment>
    
  )
}
export default Conditional;
const Netflix2=()=>{
  const m_name="Pushpa 2: The Rule";
  const rate="8.3";
  const watch=()=>{
    return "16+";
  }
  const age=17;
  const ageCheck=()=>{
    if(age>=18){
        return "watch now"
    }
    return "Not Available"
  }

  const sumumary="The official title, Pushpa 2 The Rule, was announced on 22 August 2022. An inaugural muhurat puja ceremony was held on the same day in Hyderabad with the presence of the films cast and crew.Sukumar wrote the films script while Srikanth Vissa wrote the dialogues.";
  return(
    <div>
      <img src="pushpa2.jpg" alt="pushpa2.jpg" width="400px" height="400px"/>
    <h2>Movie name :{m_name} </h2>
    <h3>Rating:{rate}</h3>
    <p>Sumamry: {sumumary}</p>
    <p>{watch()}</p>  
    {/* <button>{age>=18? "Watch now":"Not available"}</button> */}
    <button>{(ageCheck())}</button>
    </div>
  );
}