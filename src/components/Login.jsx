import React from 'react'

const Login = () => {
  return (
    <div className='card col-md-3 bg-primary text-white h-100px d-flex justify-content-center'>
    <div className='card-header'>
      <h1 style={{textAlign:"center" , font:"bold"}}>LOGIN</h1>
    </div>
    <div className='card-body w-100 p-2 display-box h-50vh font-bold text-center'>
      <label className='text-white p-10' htmlFor="Email"> Email </label> <br />
      <input type="email" />

      <br /> <br />

      <label htmlFor="Password"> Password </label> <br />
      <input type="password" />


      <br /><br />

      <button className='mybtn bg-transparent text-white rounded-3'>LOGIN</button>

    </div>
  </div>
  )
}

export default Login;