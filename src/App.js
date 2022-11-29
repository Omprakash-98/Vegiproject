import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppVegi from './Vegiproject/AppVegi';

import ContactVeg from './Vegiproject/ContactVeg';
import LoginVeg from './Vegiproject/LoginVeg';
import NavBar from './Vegiproject/NavBar';
import CartP from './Vegiproject/redux/ShopingCart/CartP';
import SignupVegi from './Vegiproject/Signup/SignupVegi';
import VegiCart from './Vegiproject/VegiCart';

function App() {
  const [cart, setCart] = useState([])
  const [count, setCount] = useState(0)

  function addtoCart(val) {
    cart.push(val)
    setCart(cart)
    // console.log("pushdata1",cart);
    // setCart(cart)
    setCount(count + 1)
  }

  return (
    <>
      <BrowserRouter>
        <NavBar
          count={count}

        />
        <Routes>
          <Route exact path='/' element={<AppVegi
            addtoCart={addtoCart}

          />} />
          <Route path='/contact' element={<ContactVeg />} />
          <Route path='/login' element={<LoginVeg />} />
          <Route path='/AddCart' element={<CartP 
          cart={cart}
          setCart={setCart}
           />} />
          count={count}
          <Route path='/signup' element={<SignupVegi />} />
        </Routes>


      </BrowserRouter>
    </>
  );
}

export default App;
