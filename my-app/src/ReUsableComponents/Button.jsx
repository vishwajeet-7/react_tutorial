import React from 'react'

const Button = ({title,propClassName}) => {
  return (
    <button className={propClassName}>{title}</button>
  )
}

export default Button
