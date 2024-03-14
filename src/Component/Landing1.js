import React from 'react'
// import group from './landing-page-website-assets/Group.png'
// import undraw from './landing-page-website-assets/undraw_mobile_login_ikmv.png'
import a from '../Component/tinjo-website-assets/Group1.png'

const Landing1 = () => {
  return (

    <>
      
      
      <div className='container pt-5'>
        <div className='row align-items-center'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <h1>Hi, I'm John!</h1>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <img style={{ width: '20vw' }} src={a} alt='sd' />
          </div>
        </div>
      </div>

      <div className='container d-flex justify-content-between'>
        <div><h5>Recent Posts</h5></div>
        <div><h5>View all</h5></div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className="card" >
              {/* <img src={} class="card-img-top" alt="..."/> */}
              <div class="card-body">
                <h5 className="card-title">Post Title</h5>
                <div>
                  <p>12 Feb 21   |   Design System</p>
                </div>
                <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className="card" >
              {/* <img src={} class="card-img-top" alt="..."/> */}
              <div class="card-body">
                <h5 className="card-title">Post Title</h5>
                <div>
                  <p>12 Feb 21   |   Design System</p>
                </div>
                <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container  mt-5 py-2'>
        <div className='row'>
          <div className='col-2'></div>
          <div className='col-4'><h5>Featured Work</h5></div>
          <div className='col-2'></div>
          <div className='col-4'><h5>View all</h5></div>

        </div>
      </div>
    </>
    // <div>
    //   <div className='container my-5'>
    //     <div className='row'>
    //       <div className='col-lg-6 col-md-6 col-sm-12' style={{paddingTop:'13vh'}}>
    //         <h2>Introduce Your Product <br /> Quickly & Effectively</h2>
    //         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br /> commodo ligula eget dolor. Aenean massa. Cum sociis natoque <br /> penatibus et magnis dis parturient montes, nascetur ridiculus <br /> <br />
    //           mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, <br /> sem. Nulla consequat massa quis enim.</p>
    //         <div className='d-flex ' ><div ><button style={{padding:"4px 30px 4px 30px",backgroundColor:'rgb(17, 27, 71)',color:'white'}}>Purchase UI Kit</button></div>
    //           <div className='ms-5'><button style={{color:'rgb(17, 27, 71)',border:'1px solid rgb(17, 27, 71)',padding:'4px 30px 4px 30px'}} >Learn More</button></div>
    //         </div>
    //       </div>
    //       <div className='col-lg-6 col-md-6 col-sm-12'>
    //         <img style={{ width: '100%', height: '80vh' }} src={group} />
    //       </div>
    //     </div>
    //   </div>
    //   <div className='container my-5'>
    //     <div className='row '>
    //       <div className='col-lg-6 col-md-6 col-sm-12' style={{paddingTop:'17vh'}}>
    //         <h2>Light, Fast & Powerful</h2>
    //         <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
    //           mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
    //         <div>
    //           <div className='d-flex justify-content-between gap-5' >
    //             <div class="card border-0" >
    //           <i class="fa-solid fa-book ps-4"></i>
    //             <div class="card-body ">
    //               <h5 class="card-title">Title Goes Here</h5>
    //               <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
    //               {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    //             </div>
    //           </div>
    //           <div class="card   border-0" >
    //           <i class="fa-solid fa-book ps-4"></i>
    //             <div class="card-body">
    //               <h5 class="card-title">Title Goes Here</h5>
    //               <p class="card-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
    //               {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
    //             </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='col-lg-6 col-md-6 col-sm-12'>
    //         <img style={{width:'100%'}} src={undraw}/>
    //       </div>
    //     </div>
    //   </div>

    // </div>
  )
}

export default Landing1
