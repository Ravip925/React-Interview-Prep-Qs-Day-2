import React from "react";
import { useState } from "react";
import ToChild from "./To-Child";
import '../Compo.css'

const FromParent = () => {
  const [data, setData] = useState(" ");
  const handleData = () => {
    setData("The data is transferred from Parent to Child Component");
  };
  return (
    <div>
   
        <h2>Parent Component</h2>
        <button onClick={() => handleData()}>Click Me</button>
        <ToChild sentData={data} />
      
    </div>
  );
};

export default FromParent;
