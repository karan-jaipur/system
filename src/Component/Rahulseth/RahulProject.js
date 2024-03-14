import React from 'react'
import Rahulnav from './Rahulnav'

const RahulProject = () => {
  return (
    <div className='container' style={{ width: '80vw' }}>
      <Rahulnav/>
      <div style={{ fontSize: '60px', fontWeight: '700' }}>All Projects</div>
      <hr />
      <div className='container' >
        <div className='row'>
          <div className='col-lg-4 col-md-12 col-sm-12 pt-5'>
            <div class="card" style={{border:'0',boxShadow:'5px 5px 5px  rgb(57, 184, 166)',height:'24rem'}} >
              <img style={{width:"100%"}} src="https://rahulseth.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frfqk5o8o%2Fproduction%2F7d92854afe667215312e0e0a7f8213b2f4f3ca02-1200x630.png&w=1080&q=75" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Next js and Tailwind priject</h5>
                  <p class="card-text">Next js and Tailwind priject Next js and Tailwind priject</p>
                  <button style={{color:'rgb(57, 184, 166)',border:'0'}}>Learn More</button>
                </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 pt-5'>
             <div class="card" style={{border:'0',boxShadow:'5px 5px 5px  rgb(57, 184, 166)',height:'24rem'}} >
              <img style={{width:"100%"}} src="https://rahulseth.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frfqk5o8o%2Fproduction%2Fb1b019a0b4ab39d86f5550c08a1b7133c7e7ae29-1844x883.png&w=1080&q=75" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Next js and Tailwind priject</h5>
                  <p class="card-text">Next js and Tailwind priject Next js and Tailwind priject</p>
                  <button style={{color:'rgb(57, 184, 166)',border:'0'}}>Learn More</button>
                </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-12 col-sm-12 pt-5'>
             <div class="card" style={{border:'0',boxShadow:'5px 5px 5px  rgb(57, 184, 166)',height:'24rem'}} >
              <img style={{width:"100%"}} src="https://rahulseth.vercel.app/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Frfqk5o8o%2Fproduction%2F0cc082b0768e35fc3401761215a095e258923510-284x177.jpg&w=1080&q=75" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Next js and Tailwind priject</h5>
                  <p class="card-text">Next js and Tailwind priject Next js and Tailwind priject</p>
                  <button style={{color:'rgb(57, 184, 166)',border:'0'}}>Learn More</button>
                </div>
            </div>
          </div>
        </div>
      </div>











    </div>
  )
}

export default RahulProject
