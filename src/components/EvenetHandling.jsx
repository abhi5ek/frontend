import React from 'react'

const EvenetHandling = () => {
    let count=1;
  return (
    <div className='container'>
        <h1 className='text-center'>Event Handling</h1>
        <hr />

        <h3>Click Event</h3>
        <button className='btn btn-primary mt-3' onClick={ () => { alert('Button was clicked')} }>click</button>

        <br /><br />

        <h3>Change Event</h3>
        <input type="text" className='form-control' onChange={ (e) => { console.log(e.target.value) }} />

        <input type="color" className='mt-5' 
          onChange={ (e) => { console.log(e.target.value)
          document.body.style.backgroundColor = e.target.value;
             }} 
        />

        <input type="file" className='form-control' multiple onChange={ (e) => { console.log(e.target.files)}}/>

        <button className='btn btn-danger mt-5' onClick={ (count) => {count++;console.log(count)}}>Add Count</button>
        <h1>{count}</h1>
    </div>
  )
}

export default EvenetHandling