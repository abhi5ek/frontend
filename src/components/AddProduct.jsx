import { useFormik } from 'formik'
import React from 'react'

const AddProduct = () => {

    const productForm = useFormik({
        initialValues:{
            name : "",
            model:"",
            image:"",
            price:""
        },
        onSubmit : async ( values ) => {
            console.log(values);
      
            const res = await fetch('http://localhost:5000/product/addProduct', {
              method: 'POST',
              body: JSON.stringify(values),
              headers: {
                'Content-Type' : 'application/json'
              }
            });
            console.log(res.status);
        }
    });

  return (
    <div>
        <div className='w-25'>
            <div className='card'>
                <div className='card-header text-center'>  ADD NEW PRODUCT </div>
                <div className='card-body'>
                    <form onSubmit={productForm.handleSubmit}>
                        <label htmlFor="">Product Name</label>
                        <input type="text" className='form-control mb-3' name='name' onChange={productForm.handleChange} value={productForm.values.name} />

                        <label htmlFor="">Product Model</label>
                        <input type="text" className='form-control mb-3' name='model' onChange={productForm.handleChange} value={productForm.values.model} />
                        
                        <label htmlFor="">Product Image</label>
                        <input type="file" className='form-control mb-3' name='image' onChange={productForm.handleChange} value={productForm.values.image} />
                       
                        <label htmlFor="">Product Price</label>
                        <input type="text" className='form-control mb-3' name='price' onChange={productForm.handleChange} value={productForm.values.price} />

                        <button className='btn btn-primary w-100'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default AddProduct