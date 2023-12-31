import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const StateManagement = () => {
    let count=1;
    
    const [likes, setLikes] = useState(1); 

  return (
    <div className='container'>
        <h1 className='text-center'>StateManagement</h1>
        <hr />

        <button className='btn btn-primary mt-4' onClick={ () =>{ count++;console.log(count)  }}>Add Count</button>
  
        <h1>{count}</h1>

        <button className="btn btn-success mt-5" onClick={() => { setLikes(likes+1) }}>Update State</button>

        <h1>{likes}</h1>


        </div>
  )
}

export default StateManagement;