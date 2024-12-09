import React from 'react'

const Character = ({name_of_character,bgColor,filterValue}) => {
    console.log("filter value",filterValue)
  return (
    <div className={`card text-white w-25 m-auto bg-${filterValue === name_of_character ? "primary" : bgColor} fs-5 p-1 mb-2 `}>
      {name_of_character}
    </div>
  )
}

export default Character
