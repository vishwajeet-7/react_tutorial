import React from "react";
import ComicsCharacter from "./ComicsCharacter/ComicsCharacter";

const ListComponent = ({filterValue}) => {
  const superHeros = [
    "Spiderman",
    "Superman",
    "Shaktimaan",
    "Iron-man",
    "Thor",
  ];

  const superVillains = [
    "Green-goblin",
    "Doomsday",
    "Tamraaz-Kilwis",
    "Thanos",
    "Loki",
  ];
  return (
    <div>
      <p className="fs-1">List of Super Heros and their Nemesis</p>
      <ComicsCharacter namesArray={superHeros} title={"Super Heros"} filterValue={filterValue}/>
      <ComicsCharacter namesArray={superVillains} title={"Super Villains"} filterValue={filterValue}/>
    </div>
  );
};

export default ListComponent;
