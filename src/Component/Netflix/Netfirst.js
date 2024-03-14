import React from 'react'
import a from './Assets/netflix-website-assets/tv.png'
import b from './Assets/netflix-website-assets/mobile-0819.jpg'
import c from './Assets/netflix-website-assets/device-pile-in.png'
import d from './Assets/netflix-website-assets/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png'
import vidb from './Assets/netflix-website-assets/video-devices-in.mp4'
import vida from './Assets/netflix-website-assets/video-tv-in-0819.mp4'


const Netfirst = () => {
  return (
   <>
   <div className='py-5 bg-black text-white'  style={{borderBottom:'10px solid rgb(35, 35, 35)'}}>
    <div className='container '>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h1 style={{fontSize:'50px',fontWeight:"700",}}>Enjoy on your TV</h1>
          <h5>Watch on smart TVs, PlayStation, Xbox, Chromecast, <br></br> Apple TV, Blu-ray players and more.</h5>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 mt-5'>
        <div className='imgvid my-5'>
          <img style={{width:'34%',position:'absolute',bottom:"-60%"}} src={a} alt='aa'/>
          <video style={{width:"70%",paddingLeft:'65px',}}  autoplay controls  src={vida} />
          </div>
          </div>
      </div>
    </div>
   </div>
   <div className='py-5 bg-black text-white'  style={{borderBottom:'10px solid rgb(35, 35, 35)'}}>
    <div className='container '>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <img style={{width:'100%'}} src={b} alt='aa'/>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h1 style={{fontSize:'50px',fontWeight:"700",}}>Download your shows to <br/> watch offline</h1>
          <h5>Save your favourites easily and always have <br/> something to watch.</h5>
        </div>
      </div>
    </div>
   </div>
   <div className='py-5 bg-black text-white'  style={{borderBottom:'10px solid rgb(35, 35, 35)'}}>
    <div className='container '>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h1 style={{fontSize:'50px',fontWeight:"700",}}>Watch everywhere</h1>
          <h5>Stream unlimited movies and TV shows on your <br/> phone, tablet, laptop, and TV.</h5>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12 py-5'>
          <img  style={{width:'35%',position:'absolute',bottom:"-205%",right:'21%'}} src={c} alt='aa'/>
          <video style={{width:'50%'}}  src={vidb}  controls autoplay muted/>
        </div>
      </div>
    </div>
   </div>
   <div className='py-5 bg-black text-white'  style={{borderBottom:'10px solid rgb(35, 35, 35)'}}>
    <div className='container '>
      <div className='row align-items-center'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <img style={{width:'100%'}} src={d} alt='aa'/>
        </div>
        <div className='col-lg-6 col-md-12 col-sm-12'>
          <h1 style={{fontSize:'50px',fontWeight:"700",}}>Create profiles for kids</h1>
          <h5>Send children on adventures with their favourite <br/> characters in a space made just for them—free with <br/> your membership.</h5>
        </div>
      </div>
    </div>
   </div>
   
   
   
   
   
   
   
   
   </>
  )
}

export default Netfirst

