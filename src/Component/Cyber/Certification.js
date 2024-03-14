import React from 'react'
import Nav from './Nav'
import removebg from '../Asssets/image-removebg 1.png'
import Group50 from '../Asssets/Group 50@2x.png'
// import Group69 from '../Asssets/Group 69@2x.png'
import Vector from '../Asssets/Vector.png'
import Footer from './Footer'



const Certification = () => {
  const Ec=[
    {
    url:require('../Asssets/Os.png'),
    p:'Some quick example text to build on the card title and make up the bulk of the cards content.',
    button:'Learn More'
    },
    {
    url:require('../Asssets/Ec.png'),
    p:'Some quick example text to build on the card title and make up the bulk of the cards content.',
    button:'Learn More'
    },
    {
    url:require('../Asssets/comptica.png'),
    p:'Some quick example text to build on the card title and make up the bulk of the cards content.',
    button:'Learn More'
    },
    {
    url:require('../Asssets/redhat.png'),
    p:'Some quick example text to build on the card title and make up the bulk of the cards content.',
    button:'Learn More'
    },
  ]
  return (
    <div style={{ backgroundColor: 'rgb(17, 25, 39)', color: 'white' }}>
      <Nav />
      <div className='text-center my-4 py-5 ' style={{ backgroundColor: 'rgb(26, 35, 50)', color: 'white' }}>
        <div className='py-3 fs-1'><h1 className='a700'>TIPS-G Certifications</h1></div>
        <div><p className='a400'>HTB Academy's hands-on certifications are designed to provide job proficiency on various cybersecurity roles. As ensured by up-to-date training material, rigorous certification processes and real-world exam lab environments, HTB certified individuals will possess deep technical competency in different cybersecurity domains.</p></div>
      </div>

      <div className='text-center'><button className='i700 text-black'>Get Your Demo Class</button></div>




      <div className='container mt-5 bg-primary py-5 back imgbggr'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div class="card bg-transparent  border-0" >
              <div className='container '>
                <div className='row align-items-center'>
                  <div className='col-lg-4'>
                    <img style={{ width: '100%' }} src={Group50} class="card-img-top" alt="..." />
                  </div>
                  <div className='col-lg-8'>
                    <img style={{ width: '100%' }} src={removebg} class="card-img-top" alt="..." />
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h1 class="card-title p400 fs-1"> MDCS</h1>
                <p class="card-text a100 fs-3"><u>Master Diploma in Cyber Security</u></p>

              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <p className='a100 '>TIPS-G Certified</p>
            <h1 className='a400 py-3'>Master Diploma in Cyber Security</h1>
            <p className='i300 fs-4'>TIPS-G Master Diploma in Cyber Security is a highly hands-on certification that assesses the candidates hacking skills. TIPS-G Master Diploma in Cyber Security certification holders will possess technical competency in the ethical hacking and penetration testing domains at an intermediate level. They will also be able to assess the risk at which an infrastructure is exposed and compose a commercial-grade as well as actionable report.</p>
          </div>

        </div>
        <div className='mt-2 mb-5' style={{ backgroundColor: 'white', width: '100%', height: '1px' }}></div>
        <div className='col-lg-12 col-sm-12 col-md-12 '>
          <div className='row'>
          <div className=' col-lg-3 col-sm-12 col-md-12  fs-2'><i class="fa-solid fa-brain"></i>12  Modules</div>
          <div className=' col-lg-3 col-sm-12 col-md-12  fs-2'><i class="fa-solid fa-lightbulb"></i>Internship Included</div>
          <div className=' col-lg-3 col-sm-12 col-md-12  fs-2'><i class="fa-solid fa-lightbulb"></i>Duration : 1 Year</div>
          <div className=' col-3 text-center fs-2'><button >Get Enrolled</button></div>
          </div>

        </div>

      </div>






      <div className='container mt-5 bg-primary py-5 back imgbggr1'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <div class="card bg-transparent  border-0" >
              <div className='container '>
                <div className='row align-items-center'>
                  <div className='col-lg-4'>
                    <img style={{ width: '100%' }} src={Group50} class="card-img-top" alt="..." />
                  </div>
                  <div className='col-lg-8'>
                    <img style={{ width: '100%' }} src={Vector} class="card-img-top" alt="..." />
                  </div>
                </div>
              </div>
              <div class="card-body">
                <h1 class="card-title p400 fs-1"> MDCS</h1>
                <p class="card-text a100 fs-3"><u>Master Diploma in Cyber Security</u></p>

              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <p className='a100 '>TIPS-G Certified</p>
            <h1 className='a400 py-3'>Master Diploma in Cyber Security</h1>
            <p className='i300 fs-4'>TIPS-G Master Diploma in Cyber Security is a highly hands-on certification that assesses the candidates hacking skills. TIPS-G Master Diploma in Cyber Security certification holders will possess technical competency in the ethical hacking and penetration testing domains at an intermediate level. They will also be able to assess the risk at which an infrastructure is exposed and compose a commercial-grade as well as actionable report.</p>
          </div>

        </div>
        <div className='mt-2 mb-5' style={{ backgroundColor: 'white', width: '100%', height: '1px' }}></div>
        <div className='col-lg-12 col-sm-12 col-md-12 '>
          <div className='row'>
          <div className=' col-lg-3 col-sm-12 col-md-12  fs-2'><i class="fa-solid fa-brain"></i>12  Modules</div>
          <div className=' col-lg-3 col-sm-12 col-md-12  fs-2'><i class="fa-solid fa-lightbulb"></i>Internship Included</div>
          <div className=' col-lg-3 col-sm-12 col-md-12  fs-2'><i class="fa-solid fa-lightbulb"></i>Duration : 1 Year</div>
          <div className=' col-3 text-center fs-2'><button >Get Enrolled</button></div>
          </div>

        </div>     

      </div>

      <div className='text-center my-4 py-5 mt-5' style={{ backgroundColor: 'rgb(26, 35, 50)', color: 'white' }}>
        <div className='py-3 fs-1'><h1 className='a700'>Professional Certifications</h1></div>
        <div><p className='a400'>TIPS-G offers its subject-matter enriched EC-Council Certified Ethical Hacking Course in Jaipur, Offensive Security OSCP Course in Jaipur, Red Hat Linux Course<br /> in Jaipur, CISCO Certified CCNA Course in Jaipur, Cyber Security Course, Internet of Things (IoT) Courses, Artificial Intelligence Course, End Point Security Course,<br /> Web, and Mobile Pentesting Courses, and many more with a valid Certification that is fully authentic throughout the world wherever you apply Our training is provided<br /> by industry-oriented and experienced teaching fraternities with high expertise to hone our students Go-Ready in any Cyber Security domain.</p></div>
      </div>


{/* ------------------map------------- */}
      <div className='container'>
        <div className='row text-center'>
          {
            Ec.map((index)=>
            {
              return(
          <div className='col-lg-6 col-md-12 col-sm-12 pt-5'>
            <div class="card px-5 pt-3" >
              <img style={{width:'100%',height:'20vh'}} src={index.url} class="card-img-top" alt="..."/>
                <div class="card-body">
                  {/* <h5 class="card-title">Card title</h5> */}
                  <p class="card-text">{index.p}</p>
                  <button className='text-dark'>{index.button}</button>
                </div>
            </div>
          </div>
              )
            })
          }
        </div>
      </div>

      <div className='mt-5'><Footer/></div>










    </div>
  )
}

export default Certification
