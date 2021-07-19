import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({onChangeColor,color}) {
  function handleClick(){
    const newColor2= getRandomColor()
    onChangeColor(newColor2)
  }
  return <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
