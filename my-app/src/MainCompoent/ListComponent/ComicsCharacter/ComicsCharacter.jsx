import React from "react";
import Character from "./Character/Character";

const ComicsCharacter = ({namesArray,title,filterValue}) => {
  
  return (
    <div className="card mt-2">
      <p className="fs-3 fw-bold">{title}</p>
      {namesArray.map((name, idx) => (
        <Character key={name} name_of_character={name} filterValue={filterValue} bgColor={title === "Super Heros" ? "danger" : "success"}/>
      ))}
      {/* <Hero/> */}
    </div>
  );
};

export default ComicsCharacter;
