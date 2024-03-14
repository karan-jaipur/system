import React from 'react'
// import happy from './landing-page-website-assets/undraw_mention_6k5d.png'
import './Landing.css'
// import a from 

const Landing2 = () => {
  // ------------------------mapping of 1 page tinjo
  const tinjo = [
    {
      h32: 'Designing Dashboards',
      nh32: 'Dashboard',
      p2: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      url2: require("../Component/tinjo-website-assets/Image.png")

    },
    {
      h32: 'Designing Dashboards',
      nh32: 'Dashboard',
      p2: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      url2: require("../Component/tinjo-website-assets/ImageSide.png"),

    },
  ]


  return (
    <div>
      {/* --------------mapping of 1 page tinjo */}

      {
        tinjo.map((tm) => {
          return (
            <div className='container' >
              <div className='row align-items-center'>
                <div className='col-lg-2 '></div>
                <div className='col-lg-4'>
                  <img style={{ width: '100%' }} src={tm.url2} alt='lkjh' ></img>
                </div>
                <div className='col-lg-4'>
                  <h3>{tm.h32}</h3>
                  <p>{tm.nh32}</p>
                  <p>{tm.p2}</p>
                <div className='col-lg-2 '></div>

                </div>
              </div>

            </div>
          )
        })
      }
      <div style={{ border: '1px solid rgb(183, 183, 183)', width: '60vw', height: '1px', marginLeft: '20vw' }}></div>



      {/* {
        s.map((ass, index) => {
          return (

            <div className='container py-5 ' style={{ paddingTop: '15vh' }}>
              <div className='row align-items-center'>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <img style={{width:'100%'}} src={ass.url} />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <h2>{ass.h2}</h2>
                  <p>{ass.p}</p>
                  {index == 2 ? <><button style={{padding:"9px 80px 9px 80px",backgroundColor:'rgb(17, 27, 71)',color:'white'}}  >Purchase Now</button></> : <></>}
                </div>
              </div>
            </div>
          )
        })
      } */}

    </div>
  )
}

export default Landing2
