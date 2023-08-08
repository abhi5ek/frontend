import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('FirstName Required'),
  lastName: Yup.string().required('LastName Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
});

const Signup = () => {

  const signupform = useFormik({
    initialValues: {
      firstName : "",
      lastName : "",
      email : "",
    },
    onSubmit : ( values ) => { 
      console.log(values)
    },
    validationSchema : SignupSchema
  });
  return (
      <div>
      
         <div className='w-25'>
            <div className='card'>
              <div className='card-body'> 
                 <h3 className='text-center'>Signup Form</h3>   <hr />

                 <form onSubmit={signupform.handleSubmit}>
                     <label htmlFor="firstName">firstName</label>  
                     <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{signupform.errors.firstName}</span>
                     <input type="text" className='form-control mb-3' name="firstName" onChange={signupform.handleChange} value={signupform.values.firstName} /> 

                     <label htmlFor="lastName">lastName</label> 
                     <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{signupform.errors.lastName}</span>
                     <input type="text" className='form-control mb-3' name="lastName" onChange={signupform.handleChange} value={signupform.values.lastName} />  

                     <label htmlFor="email">Email</label> 
                     <span style={{color: 'red', fontSize:'0.7rem', marginLeft: 10}}>{signupform.errors.email}</span>
                     <input type="text" className='form-control mb-3' name="email" onChange={signupform.handleChange} value={signupform.values.email} /> 

                     <button className='btn btn-success w-100'>submit</button>
                 </form>

              </div>
            </div>
         </div>
      </div>
   
  )
};

export default Signup;