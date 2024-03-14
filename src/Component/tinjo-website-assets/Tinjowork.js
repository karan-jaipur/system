import React from 'react'
import LandingNav from '../LandingNav'
import Landinglast from '../Landinglast'

const Tinjowork = () => {
  const tinjo3page = [
    {
      h3:'Designing Dashboards',
      nh3:'Dashboard',
      p:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet1.',
       url: require("../tinjo-website-assets/Image.png")

    },
    {
      h3:'Designing Dashboards',
      nh3:'Dashboard',
      p:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      url: require("../tinjo-website-assets/ImageSide.png")

    },
    {
      h3:'Designing Dashboards',
      nh3:'Dashboard',
      p:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis  enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      url: require("../tinjo-website-assets/ImageSide(2).png")

    },
    {
      h3:'Designing Dashboards',
      nh3:'Dashboard',
      p:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.1',
      url:require("../tinjo-website-assets/ImageSide(1).png")
      

    },
  ]
  return (
    <div>
      <LandingNav/>
{
        tinjo3page.map((tm) => {
          return (
            <div className='container mt-3' >
              <div className='row align-items-center'>
                <div className='col-lg-2 '></div>
                <div className='col-lg-4'>
                  <img style={{ width: '100%' }} src={tm.url} alt='he' />
                </div>
                <div className='col-lg-4'>
                  <h3>{tm.h3}</h3>
                  <p>{tm.nh3}</p>
                  <p>{tm.p}</p>
                  <div className='col-lg-2 '></div>

                </div>
              </div>
            
            </div>
          )
        })
      }
      <Landinglast/>
    </div>
  )
}

export default Tinjowork

