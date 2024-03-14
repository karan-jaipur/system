import React from 'react'
import Navgood from './Navgood'
import Footer from './Footer'

const Cart = () => {
  return (
    <div>
      <Navgood/>
      <div className='container w-100% gap-2 p-3' style={{border:'1px solid rgb(0, 124, 186)',backgroundColor:'rgb(244, 248, 255)',marginTop:'15vh'}}><i class="fa-solid fa-circle-info"></i>Your cart is currently empty.</div>
      <div className='text-center my-5'><button style={{backgroundColor:'rgb(52, 82, 255)',color:'white',padding:'9px 15px',border:'0',marginBottom:'15vh'}}>Return To Shop</button></div>
      <Footer/>
    </div>
  )
}

export default Cart
