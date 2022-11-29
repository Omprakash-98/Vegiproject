import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import ContactVeg from './ContactVeg'
import HeaderVegi from './HeaderVegi'
import LoginVeg from './LoginVeg'
import VegiCart from './VegiCart'

export default function AppV() {
  return (
    <BrowserRouter>

  <Routes>
  <Route exact path='/' element={<AppVegi/>}/>
  <Route path='/contact' element={<ContactVeg/>}/>
  <Route path='/login' element={<CartP/>}/>

  </Routes>


  </BrowserRouter>
  )
}
