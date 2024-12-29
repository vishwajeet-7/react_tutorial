import React from 'react'
import { Link } from 'react-router-dom'

const Message = ({message,redirectLink,redirectComponentName}) => {
  return (
    <p>
    {message}{" "}
    <Link to={redirectLink}>
      <strong className="text-primary">{redirectComponentName}</strong>
    </Link>
  </p>
  )
}

export default Message
