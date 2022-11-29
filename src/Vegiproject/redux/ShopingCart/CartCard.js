import React, { useState } from 'react';

// import { faker } from '@faker-js/faker';
import './CartCss.css'

const Cartjsx = (props) => {
  const [count, setCount] = useState(null)
  const [count2, setCount2] = useState(0)
  return (<>
    <div className='main_div2  align-items-center my-3 p-3  rounded shadow-lg'>
      <div className='my-2 '>
        <img src={props.imgsrc} className='rounded shadow-sm' width='110rem' />
      </div>

      <div className='title my-2'>
        <h2>{props.brand}</h2>
        <p>{props.color}</p>
      </div>

      <div className='quntity d-flex align-items-center'>
        <i className="fa fa-minus py-2 " onClick={() => setCount(count - 1)}></i>

        <input style={{ width: '20px', height: '50%' }} placeholder='Q'value={count}  />
        <i className="fa fa-plus" onClick={() => setCount(count + 1)}></i>

      </div>
      <div className='price align-items-center'>
        <h4>Price:</h4>
        <h2 style={{ color: 'red' }}>{props.price}</h2>
      </div>
      <div className='delete align-items-center'>

        <i className="fa fa-trash"></i>
      </div>


    </div><hr />
  </>)
}
export default Cartjsx