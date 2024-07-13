import React, { useState, useEffect } from 'react';

const UnitConverter = () => {
  const [input, setInput] = useState('');
  const [inputOption, setInputOption] = useState('kilometers');
  const [outputOption, setOutputOption] = useState('meters');
  const [result, setOutput] = useState('');

  useEffect(() => {
    convertUnit();
  }, [input, inputOption, outputOption]);

  const convertUnit = () => {
    let output;
    if (inputOption === "kilometers" && outputOption === "yards") {
      output = input * 1093.6133;
    } else if (inputOption === "yards" && outputOption === "kilometers") {
      output = input * 0.0009144;
    } else if (inputOption === "miles" && outputOption === "kilometers") {
      output = input * 1.60934;
    } else if (inputOption === "kilometers" && outputOption === "miles") {
      output = input * 0.621371;
    } else if (inputOption === "miles" && outputOption === "meters") {
      output = input * 1609.34;
    } else if (inputOption === "meters" && outputOption === "miles") {
      output = input * 0.000621371;
    } else if (inputOption === "kilometers" && outputOption === "meters") {
      output = input * 1000;
    } else if (inputOption === "meters" && outputOption === "kilometers") {
      output = input * 0.001;
    } else if (inputOption === "kilometers" && outputOption === "feet") {
      output = input * 3280.84;
    } else if (inputOption === "feet" && outputOption === "kilometers") {
      output = input * 0.0003048;
    } else if (inputOption === "feet" && outputOption === "meters") {
      output = input * 0.3048;
    } else if (inputOption === "meters" && outputOption === "feet") {
      output = input * 3.28084;
    } else if (inputOption === "feet" && outputOption === "yards") {
      output = input * 0.333333;
    } else if (inputOption === "yards" && outputOption === "feet") {
      output = input * 3;
    } else if (inputOption === "yards" && outputOption === "meters") {
      output = input * 0.9144;
    }
    setOutput(output);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleInputOption = (e) => {
    setInputOption(e.target.value);
  };

  const handleOutputOption = (e) => {
    setOutputOption(e.target.value);
  };

  const swap = () => {
    let tempOp = inputOption;
    setInputOption(outputOption);
    setOutputOption(tempOp);
  };

  return (
    <fieldset>
      <label>From: </label>
      <input type="text" id="cinput" name="cinput" value={input} onChange={handleInput} />
      <select id="cdropdown1" name="cdropdown1" value={inputOption} onChange={handleInputOption}>
        <option value="kilometers">Kilometers</option>
        <option value="meters">Meters</option>
        <option value="miles">Miles</option>
        <option value="yards">Yards</option>
        <option value="feet">Feet</option>
      </select>

      <button type="button" onClick={swap}>
        <i className="fa fa-exchange"></i>
      </button>

      <label>To: </label>
      <input type="text" id="coutput" name="coutput" value={result} readOnly />
      <select id="cdropdown2" name="cdropdown2" value={outputOption} onChange={handleOutputOption}>
        <option value="feet">Feet</option>
        <option value="yards">Yards</option>
        <option value="miles">Miles</option>
        <option value="meters">Meters</option>
        <option value="kilometers">Kilometers</option>
      </select>
    </fieldset>
  );
};

export default UnitConverter;
