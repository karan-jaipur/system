import React from 'react'
import a from './WhatsApp Image 2024-03-01 at 11.56.59_8298650d.jpg'
import b from '../Newera/Group.png'
import '../Newera/Newcss.css'

const Newera = () => {
  return (
    <div>
      <div className='py-5' style={{backgroundColor:'rgb(241, 241, 255)'}}>
      <div><img src={b}/></div>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-7'>
            <p style={{ paddingLeft: "28vw" }}>stay connected with your loved ones</p>
            <h1>NEW ERA OF MESSAGING</h1>
            <br />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='d-flex gap-5'><button style={{backgroundColor:'rgb(244, 212, 211)',borderRadius:'120px',padding:'10px'}}>NEWS</button><button style={{backgroundColor:'rgb(244, 212, 211)',borderRadius:'120px',padding:'10px'}}>Tag name 1</button><button style={{backgroundColor:'rgb(244, 212, 211)',borderRadius:'120px',padding:'10px'}}>Tag name 2</button></div>
          </div>
          <div className='col-lg-5 d-flex ' style={{mixBlendMode:'darken'}}>
            <img  className='w-100 ' src={a} />
          </div>
        </div>
      </div>
      </div>

      <div className='container pt-3'>
        <div className='row d-flex align-items-center'>
          <div className='col-lg-2 col-md-12 col-sm-12 text-primary '>
            <i class="fa-regular fa-comment"></i> Leave Comment
          </div>
          <div className='col-lg-1 col-md-12 col-sm-12 text-primary'>
            <i class="fa-regular fa-heart"></i> Like
          </div>
          <div className='col-lg-4 col-md-0 col-sm-0'></div>
          <div className='col-lg-1 col-md-12 col-sm-12'><i class="fa-regular fa-comment"></i> 64</div>
          <div className='col-lg-1 col-md-12 col-sm-12'><i class="fa-regular fa-heart"></i> 87</div>
          <div className='col-lg-2 col-md-12 col-sm-12'><i class="fa-regular fa-clock"></i> 11/11/2023 15:30</div>
        </div>

      </div>

      <div className='container py-5'>
        <p>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br/><br/>

          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>






    </div>
  )
}

export default Newera
