import React, {useContext, useState} from "react";
import "./Input.css";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// import { arraysContext } from "../Contexts/arraysContext";


function Input(props) {
  const { vehicles, planets } = props;
 
  const optionsArray = vehicles ? vehicles : planets
  let options = optionsArray.map(option => {return {"value": `${option.name}`, "label": option.name}});
  console.log(options);

  
  const handleChange = (e) => {
    options = options.filter(option => option.name !== e.target.value);
    console.log(options);
    
  }

    
  return (
    <div className="dropdown">
      {/* <select className="dropdown-select"  onChange={handleChange}>
        <option selected disabled hidden>
          Select {vehicles ? "Vehicle" : "Planet"}
        </option>
        { optionsArray.map(({ name }) => <option >{name}</option>)}
       
      </select> */}
      <Select options={options} onChange={handleChange}></Select>
    </div>
  );
}

export default Input;
