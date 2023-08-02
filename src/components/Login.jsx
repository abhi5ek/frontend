import React from 'react'

const Login = () => {
  return (
    <div className='container d-flex justify-content-center mt-5'>

      <div className='card bg-primary d-flex align-items-center col-md-4 text-white fw-bold'>
           
           <div className='card-header'>

             <h1 style={{alignItems:"center"}}>Login</h1> 

           </div>

        <div >

          <label htmlFor="email">Email</label>  <br />
          <input type="email" />

          <br /><br />
          
          
          <label htmlFor="password">Password</label>  <br />
          <input type="password" />

          <br /><br />

          <button className='mybtn btn-success align-items-center mb-4'>Login</button>

        </div>

      </div>

    </div>
  )
}

export default Login;