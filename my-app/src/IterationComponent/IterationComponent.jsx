import React from "react";
import ListComponent from "../ListComponent.jsx/ListComponent";

const IterationComponent = () => {
  const user = {
    name: "the cool developer",
    age: "25",
    college: "Raipur university",
  };

  const userArray = [
    {
      name: "the cool developer",
      age: "25",
      college: "Raipur university",
    },
    {
      name: "Aman Rai",
      age: "28",
      college: "Delhi university",
    },
    {
      name: "Simran Sinha",
      age: "30",
      college: "J&K university",
    },
  ];

  const vegetableArray = [{
    name:"brinjal",
    color:"purple",
    leaf:"rounded"
  },
  {
    name:"Lady finger",
    color:"Green",
    leaf:"straight"
  },
  {
    name:"Cabbage",
    color:"Green",
    leaf:"rounded"
  }]

  return (
    <div>
      <div>
        <h1>{user.name}</h1>
        <h1>{user.age}</h1>
        <h1>{user.college}</h1>
      </div>
      <div className="bg-danger">
        {userArray.map((obj,index)=>(<ListComponent user={obj} serialNo={index} key={index}/>))}
      </div>
      <div className="bg-success">
        {
          vegetableArray.map((veg,idx)=>(<ListComponent user={veg} serialNo={idx} key={idx}/>))
        }
      </div>
    </div>
  );
};

export default IterationComponent;
