import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';


const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string().required('Password is Required')
});


const Login = () => {

  //Initializing formik
  const loginform = useFormik({
    initialValues: {
      email : "",
      password : ""
    },
    onSubmit : ( values ) => { 
      console.log(values) ;
      // write code to submit form to server
    },
    validationSchema : LoginSchema
  });

  return (
    <div>
    <div className="w-25">
      <div className="card">
        <div className="card-body">
          <h3 className="text-center">Login Form</h3>
          <hr />

          <form onSubmit={loginform.handleSubmit}>
            <label htmlFor="">Email Address</label>
            <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{loginform.errors.email}</span>
            <input type="email" className="form-control mb-3" name="email" onChange={loginform.handleChange} value={loginform.values.email}/>

            <label htmlFor="">Password</label>
            <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{loginform.errors.password}</span>
            <input type="password" className="form-control mb-3" name="password" onChange={loginform.handleChange} value={loginform.values.password} />

            <button className="btn btn-primary w-100 mt-5">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
);
};

    

export default Login;