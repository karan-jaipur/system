import React from 'react'
import LandingNav from '../LandingNav'
import Landinglast from '../Landinglast'

const Tinjoblog = () => {
  const tinjosec = [

    {
      h51: 'Post Title',
      midp1: '12 Feb 21   |   Design System',
      p1: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      h51: 'Post Title',
      midp1: '12 Feb 21   |   Design System',
      p1: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      h51: 'Post Title',
      midp1: '12 Feb 21   |   Design System',
      p1: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
    {
      h51: 'Post Title',
      midp1: '12 Feb 21   |   Design System',
      p1: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
    },
  ]

  return (
    <div>
      <LandingNav />
      <div className='container mt-5'><h1>Blog</h1></div>
      {

        // -----------------------------------mapping of 2 page tinjo
        tinjosec.map((hi) => {
          return (
            <div className="container card py-2 mt-3" >
              <div class="card-body">
                
                <h5 className="card-title">{hi.h51}</h5>
                <div>
                  <p>{hi.midp1}</p>
                </div>
                <p className="card-text">{hi.p1}</p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          )
        },
        )
      }
      <Landinglast />
    </div>
  )
}

export default Tinjoblog
