import React, { useState } from 'react'
import './Systemcss.css'

const Map = () => {

  const [isHover,setIsHover] = useState(null);


  const mouseEnter = (i)=>{
    setIsHover(i);
  }

  const mouseLeave = ()=>{
    setIsHover(null);
  }

  const eksath = [
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system1.jpeg'),
      hover: require('../Asssets/system1.jpeg')
    },
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system1.2(1).jpeg'),
      hover: require('../Asssets/system1.2(2).jpeg')
    },
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system1.3(1).jpeg'),
      hover: require('../Asssets/system1.3(2).jpeg')
    },
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system1.4(1).jpeg'),
      hover: require('../Asssets/system1.4(2).jpeg')
    },
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system2.1(1).jpeg'),
      hover: require('../Asssets/system2.1(2).jpeg')
    },
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system2.2(1).jpeg'),
      hover: require('../Asssets/system2.2(2).jpeg')
    },
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system2.3(1).jpeg'),
      hover: require('../Asssets/system2.3(2).jpeg')
    },
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system2.4(1).jpeg'),
      hover: require('../Asssets/system2.4(2).jpeg')
    },
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system3.1(1).jpeg'),
      hover: require('../Asssets/system3.1(2).jpeg')
    },
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system3.2(1).jpeg'),
      hover: require('../Asssets/system3.2(2).jpeg')
    },
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system3.3(1).jpeg'),
      hover: require('../Asssets/system3.3(2).jpeg')
    },
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system3.4(1).jpeg'),
      hover: require('../Asssets/system3.4(2).jpeg')
    },
  ]

  const eksath1 = [
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system4.1(1).jpeg'),
      hover: require('../Asssets/system4.1(2).jpeg')
    },
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system4.2(1).jpeg'),
      hover: require('../Asssets/system4.2(2).jpeg')
    },
    {
      h5:"Haters slogan hoodie- Olive green",
      p:"₹1,799.00",
      url: require('../Asssets/system4.3(1).jpeg'),
      hover: require('../Asssets/system4.3(2).jpeg')
    },
  
  ]


  return (
    <div>
      
      <div className='text-center py-2'>
        <h1 className='a'>Hoodies & Sweatshirts</h1>
      </div>
      <div className='container'>
        <div className='row' style={{rowGap:"15px"}} >
          {
            eksath.map((a,value) => {
              return (
                <div key={value} className=' col-lg-3 col-md-3 col-sm-12' style={{borderRadius:'20px',}}>
                <div class="card text-center card-hover  " onMouseEnter={()=>mouseEnter(value)} onMouseLeave={mouseLeave} >
                  <img style={{width:'100%',height:"250px",objectFit:"cover"}} src={value==isHover?a.hover:a.url} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{a.h5}</h5>
                    <p class="card-text">{a.p}</p>
                  </div>
                </div>
                </div>
              )
            })

          }
        </div>
      </div>
      <div className='text-center py-2'>
      <h1 className='a'>T-Shirts</h1>
      </div>
      <div className='container py-5'>
        <div className='row' style={{rowGap:"15px"}} >
          {
            eksath1.map((a,value) => {
              return (
                <div key={value} className=' col-lg-3 col-md-3 col-sm-12' style={{borderRadius:'20px',}}>
                <div class="card text-center card-hover  " onMouseEnter={()=>mouseEnter(value)} onMouseLeave={mouseLeave} >
                  <img  style={{width:'100%',height:"250px",objectFit:"cover",}} src={value==isHover?a.hover:a.url} className="card-img-top r" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{a.h5}</h5>
                    <p class="card-text">{a.p}</p>
                  </div>
                </div>
                </div>
              )
            })

          }
        </div>
      </div>






    </div>
  )
}

export default Map
