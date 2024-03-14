import React from 'react'
import Rahulnav from './Rahulnav'

const RahulFirst = () => {
  return (
    
    <div className='container' style={{ width: '80vw' }}>
      <Rahulnav/>
      <div style={{ fontSize: '60px', fontWeight: '700' }}>Home</div>
      <hr />
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6 col-sm-12 text-center'>
            <img style={{ width: '40%', borderRadius: '60%' }} src='https://rahulseth.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fseth.77d13c2b.png&w=1080&q=75' />
            <h4>Rahul Seth</h4>
            <p style={{color:"rgb(139, 143, 152)"}}>Hey my name is Rahul Seth and I am a Frontend Developer</p>
            <div className='d-flex gap-3 justify-content-center' style={{fontSize:"30px",color:'rgb(20, 184, 166)'}}>
              <div><i class="fa-brands fa-github"></i></div>
              <div><i class="fa-brands fa-linkedin"></i></div>
              <div><i class="fa-solid fa-envelope"></i></div>
              <div><i class="fa-brands fa-twitter"></i></div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12' style={{lineHeight:'35px'}}>
            <p>Welcome to my portfolio! I'm a versatile frontend developer <br/> specializing in crafting engaging and responsive web <br/> applications.</p>
            <p>With a strong command of React.js, Tailwind CSS, and <br/> TypeScript, along with a solid foundation in sorting <br/> algorithms, I'm dedicated to building visually stunning and <br/> high-performance user interfaces.</p>
          </div>
        </div>
      </div>








    </div>
  )
}

export default RahulFirst
