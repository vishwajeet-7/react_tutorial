import React, { useState } from 'react'
import "./Counter.css"

const Counter = () => {
    const [count,setCount] = useState(0)

  return (
    <>
      <div className="box m-auto w-50 mt-5 p-4" style={{height:"300px"}}>
        <h1>The cool developer</h1>
        <p className='fs-1 fw-bold'>Counter</p>
        <p className='fs-3 fw-medium'>{count}</p>
        <button className='btn btn-success' onClick={()=>setCount(count+1)}>+ add</button>
        <button className='btn btn-danger' onClick={()=>setCount(count-1)}>- minus</button>
      </div>
    </>
  )
}

export default Counter
