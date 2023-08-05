import React, { useState } from 'react'
import smartphones from './dummyData';

const ListProduct = () => {
    const [productData, setProductData] = useState(smartphones);

    const displayProducts = () => {
        return productData.map((phone) => {
            return <div className='col-md-3'>
                <div className='card'>
                    <img className='card-img-top' src={phone.image} alt="Not Available" />
                    <div className='card-body'>
                        <h5>{phone.brand}</h5>
                        <h3>{phone.model}</h3>
                        <h2>₹{phone.price}</h2>
                    </div>
                </div>
            </div>
        })
    }

  return (
    <div>
        <div className='container'>
            <div className='row'>
                {displayProducts()}
            </div>
        </div>
    </div>
  )
}

export default ListProduct