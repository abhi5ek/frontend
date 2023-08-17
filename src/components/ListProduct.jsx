import React, { useState } from 'react'
import smartphones from './dummyData';

const ListProduct = () => {
    const [productData, setProductData] = useState(smartphones);

    const [price, setprice] = useState(1000); 
    <h5>{price}</h5>


    const brands = [ 'Samsung' , 'OnePlus' , 'Apple' , 'MotoRola' ];

    const model = [ 'Galaxy S23' , 'Iphone 14' , 'OnePlus 11R' , 'g14' ,'g62' , 'Galaxy A54'];

    const displayProducts = () => {
        return productData.map((phone) => {
            return <div className='col-md-3 mt-4'>
                <div className='card'>
                    <div className='m-auto h-50px'>
                    <img style={{height:'200px' , objectFit:'cover'}} className='card-img-top' src={phone.image} alt="Not Available" />
                    </div>
                    <div className='card-body'>
                        <h5>{phone.brand}</h5>
                        <h3>{phone.model}</h3>
                        <h2>₹{phone.price}</h2>
                        <button className='btn btn-primary'>Buy</button>
                        <button className='btn btn-secondary'>Add to Cart</button>
                    </div>
                </div>
            </div>
        });
    };


    const searchProduct = (e) => {
        const search = e.target.value;
        setProductData(
            smartphones.filter( (phone) => {  return phone.model.toLowerCase().includes(search.toLowerCase()) || phone.brand.toLowerCase().includes(search.toLowerCase())})
        )
    }

    const filterBrands = (e) => {
        const search = e.target.value;
        setProductData(
            smartphones.filter((phone) => {
                return phone.brand === search;
            })
        );
    };

    const filtermodel = (e) => {
        const search = e.target.value;
        setProductData(
            smartphones.filter((phone) => {
                return phone.model === search;
            })
        );
    };

    const filterPrice = (e) => {
        const search = e.target.value;
        setProductData(
            smartphones.filter((phone) => {
                return phone.price < search;
            })
        )
    }

  return (
    <div className='list_back'>

        <header className='bg-transparent '>
           <div className='container py-5'>
             <h1 className='text-center'>Product List Page</h1>
             <input onChange={searchProduct} type="text" className='form-control form-control-lg' placeholder='Search Product Name...'/>
           </div>
        </header>


           <div className='row'>
             <div className='col-md-2'>
                <div className='card mt-4'>
                    
                    <div className='card-header'>
                          <h3>Filters</h3>
                    </div>
                    
                    <div className='card-body '>
                          <label htmlFor="brand"><h4>By Brand</h4></label>
                          <select onChange={filterBrands}>
                          {brands.map((brand) => (
                               <option value={brand}>{brand}</option>
                          ))}
                          </select>  <br />
                          
                          
                          <label htmlFor="model"><h4>By Model</h4></label>
                          <select onChange={filtermodel}>
                          {model.map((model) => (
                               <option value={model}>{model}</option>
                          ))}
                          </select>  <br />

                          <label htmlFor="price"><h4>By Price</h4></label>
                          <input type="range" min={1000} max={200000} step={1000} onChange={filterPrice} />
        
                    </div>
                </div>
             </div>
            
            
            
            
             <div className='col-md-10'>
                <div className='row'>
                    {displayProducts()}
                </div>
             </div>
             
             
             
             
             {/* <div className='col-2'>
                <div className='card mt-4'>
                    <div className='card-body'>
                        <h3>abhishek</h3>
                    </div>
                </div>
             </div> */}
           </div> 
    </div>
  )
}

export default ListProduct


