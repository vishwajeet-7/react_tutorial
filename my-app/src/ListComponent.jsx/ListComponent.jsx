import React from 'react'

const ListComponent = ({user,serialNo}) => {
  return (
    <div>
      <ul key={serialNo}>
            <li className='text-white fs-3'>{user.name}</li>
            <li className='text-white fs-3'>{user.age || user.color}</li>
            <li className='text-white fs-3'>{user.college || user.leaf}</li>
        </ul>
    </div>
  )
}

export default ListComponent
