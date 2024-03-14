import React from 'react'
import Navgood from './Navgood'
import Footer from './Footer'

const User = () => {
  return (
    <div >
      <Navgood/>
<div className='container'>
  <div className='row'>
    <div className='col-lg-4 col-sm-0 col-md-0'></div>
    <div className='col-lg-4 col-sm-12 col-md-12 py-5'>
<h3 className='text-center'>Login</h3>
<div className='py-2'>
  <h5 >Username or email address *</h5>
  <input className='w-100 p-1' style={{border:'0',backgroundColor:'rgb(245, 245, 245)'}}  type='text'/>
</div>
<div className='py-2'>
  <h5 >Password *</h5>
  <input className='w-100 p-1' style={{border:'0',backgroundColor:'rgb(245, 245, 245)'}}  type='text'/>
</div>
<div className='py-2 d-flex gap-2'>
  <input style={{}} type='checkbox'/>
  <h5 >Rmember me *</h5>
</div>
<button className='mt-5 w-100 p-1 bg-primary text-white b-0'>Log In</button>
<h6 className='mt-4'>Lost your password?</h6>
    </div>
    <div className='col-lg-4 col-sm-0 col-md-0'></div>
  </div>
</div>


<Footer/>

    </div>
  )
}

export default User
