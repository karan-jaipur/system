import React from 'react'
import '../Cyber/Cybersec.css'
import card2 from '../Asssets/Vector (1).png'
import card4 from '../Asssets/Vector (3).png'
import card3 from '../Asssets/Vector (2).png'
import card5 from '../Asssets/Vector (4).png'

const Cardmap = () => {
  return (
    <div>
       <div className='container'>
        <div className='row' style={{ rowGap: '20px' }}>
          <div className='col-lg-3'>
            <div class="card text-center" >
              <div ><img className='w-100' src={card5} class="card-img-top" alt="..." style={{ marginTop: '-50px' }} /></div>
              <div class="card-body">
                <h5 class="card-title p400">CPTS</h5>
                <p class="card-text">Certified Penetration Testing Specialist</p>
                <div className='d-flex gap-5'>
                  <div><i class="fa-solid fa-brain"></i>8  Modules</div>
                  <div><i class="fa-solid fa-lightbulb"></i>Exam Included</div>
                </div>

              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div class="card text-center" >
              <div ><img src={card2} class="card-img-top" alt="..." style={{ marginTop: '-50px', width: '18vw' }} /></div>
              <div class="card-body">
                <h5 class="card-title p400">CPTS</h5>
                <p class="card-text">Certified Penetration Testing Specialist</p>
                <div className='d-flex gap-5'>
                  <div><i class="fa-solid fa-brain"></i>8  Modules</div>
                  <div><i class="fa-solid fa-lightbulb"></i>Exam Included</div>
                </div>

              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div class="card text-center" >
              <div ><img src={card3} class="card-img-top" alt="..." style={{ marginTop: '-50px', width: '18vw', height: '43vh' }} /></div>
              <div class="card-body">
                <h5 class="card-title p400">CPTS</h5>
                <p class="card-text">Certified Penetration Testing Specialist</p>
                <div className='d-flex gap-5'>
                  <div><i class="fa-solid fa-brain"></i>8  Modules</div>
                  <div><i class="fa-solid fa-lightbulb"></i>Exam Included</div>
                </div>

              </div>
            </div>
          </div>
          <div className='col-lg-3'>
            <div class="card text-center" >
              <div ><img src={card4} class="card-img-top" alt="..." style={{ marginTop: '-50px' }} /></div>
              <div class="card-body">
                <h5 class="card-title p400">CPTS</h5>
                <p class="card-text">Certified Penetration Testing Specialist</p>
                <div className='d-flex gap-5'>
                  <div><i class="fa-solid fa-brain"></i>8  Modules</div>
                  <div><i class="fa-solid fa-lightbulb"></i>Exam Included</div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cardmap
