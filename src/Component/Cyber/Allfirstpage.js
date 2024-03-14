import React from 'react'
import Nav from './Nav'
import '../Cyber/Cybersec.css'
// import Cardmap from './Cardmap'
// import  aaa from '../Asssets/vector(7).png'

import Footer from '../Cyber/Footer'


const Allfirstpage = () => {
  const cards=[
    {
      url: require('../Asssets/Vector (5).png'),
      h5:'MAPT',
      p:'Mobile Application Penetration Testing',
      i1:'28 Modules',
      i2:'Exam Included'
    },
    {
      url: require('../Asssets/Vector (6).png'),
      h5:'CBBS',
      p:'Mobile Application Penetration Testing',
      i1:'28 Modules',
      i2:'Exam Included'
    },
    {
      url: require('../Asssets/vector(7).png'),
      h5:'CPTS',
      p:'Mobile Application Penetration Testing',
      i1:'28 Modules',
      i2:'Exam Included'
    },
    {
      url: require('../Asssets/Vector(8).png'),
      h5:'CEH',
      p:'Mobile Application Penetration Testing',
      i1:'28 Modules',
      i2:'Exam Included'
    },
    {
      url: require('../Asssets/Vector(9).png'),
      h5:'CFS',
      p:'Mobile Application Penetration Testing',
      i1:'28 Modules',
      i2:'Exam Included'
    },
    {
      url: require('../Asssets/Vector(10).png'),
      h5:'APT',
      p:'Mobile Application Penetration Testing',
      i1:'28 Modules',
      i2:'Exam Included'
    },
    {
      url: require('../Asssets/Vector(11).png'),
      h5:'AWS',
      p:'Mobile Application Penetration Testing',
      i1:'28 Modules',
      i2:'Exam Included'
    },
    {
      url: require('../Asssets/Vector(12).png'),
      h5:'IOT',
      p:'Mobile Application Penetration Testing',
      i1:'28 Modules',
      i2:'Exam Included'
    },
    {
      url: require('../Asssets/Vector(13).png'),
      h5:' AWS SECURITY',
      p:'Mobile Application Penetration Testing',
      i1:'28 Modules',
      i2:'Exam Included'
    },
    {
      url: require('../Asssets/Vector(14).png'),
      h5:'Linux',
      p:'Mobile Application Penetration Testing',
      i1:'28 Modules',
      i2:'Exam Included'
    },
    {
      url: require('../Asssets/Vector(15).png'),
      h5:'Python',
      p:'Mobile Application Penetration Testing',
      i1:'28 Modules',
      i2:'Exam Included'
    },
    {
      url: require('../Asssets/Vector(16).png'),
      h5:'Networking',
      p:'Mobile Application Penetration Testing',
      i1:'28 Modules',
      i2:'Exam Included'
    },
  ]
  return (
    <div style={{ backgroundColor: 'rgb(17, 25, 39)', color: 'white' }}>
      <Nav />
      <div className='text-center my-4 py-5 ' style={{ backgroundColor: 'rgb(26, 35, 50)', color: 'white' }}>
        <div className='py-3 fs-1'><h1 className='a700'>All Courses</h1></div>
        <div><p className='a400'>HTB Academy's hands-on certifications are designed to provide job proficiency on various cybersecurity roles. As ensured by up-to-date training material, rigorous <br /> certification processes and real-world exam lab environments, HTB certified individuals will possess deep technical competency in different cybersecurity domains.</p></div>
      </div>

      <div className='text-center'><button className='i700 text-black'>Get Your Demo Class</button></div>


            <div className='container mt-5 pt-5'>
              <div className='row'>
      {
        cards.map((cardtxt) => {
          return (
                <div className='col-lg-3 col-md-12 col-sm-12 pt-5'>
                  <div class="card text-center" >
              <div ><img src={cardtxt.url} class="card-img-top" alt="..." style={{ marginTop: '-50px', width: '18vw', height: '43vh' }} /></div>
              <div class="card-body">
                <h5 class="card-title p400">{cardtxt.h5}</h5>
                <p class="card-text">{cardtxt.p}</p>
                <div className='d-flex gap-5'>
                  <div><i class="fa-solid fa-brain"></i>{cardtxt.i1}</div>
                  <div><i class="fa-solid fa-lightbulb"></i>{cardtxt.i2}</div>
                </div>

              </div>
            </div>
                </div>
          )
        }
        )
      }

      </div>
    </div>


<Footer/>


    </div>
  )
}

export default Allfirstpage
