import React from 'react'

const Signup = () => {
  return (
    <div className='container d-flex justify-content-center mt-5 '>
    <div className='card col-md-4 bg-info text-white h-100px d-flex justify-content-center'>
      <div className='card-header'>
        <h1 style={{textAlign:"center" , font:"bold"}}>SIGNUP</h1>
      </div>
      <div className='card-body w-100 p-2 display-box h-50vh fw-bold text-center'>
        <label className='text-white p-10' htmlFor="Email"> Email </label> <br />
        <input type="email" />

        <br /> <br />

        <label htmlFor="Password"> Password </label> <br />
        <input type="text" />

        <br /><br />

        <label htmlFor="Password"> Confirm Password </label> <br />
        <input type="password" />

        <br /><br />

        <button className='mybtn bg-transparent text-white rounded-3'>SIGNUP</button>

      </div>
    </div>
    </div>
  )
}

export default Signup