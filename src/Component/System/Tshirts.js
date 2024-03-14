import React,{useState} from 'react' 
import './Systemcss.css'
import Footer from './Footer'; 
import Navgood from '../System/Navgood';

const Shirts = () => {
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
      url: require('../Asssets/system1.jpeg'),
      hover: require('../Asssets/system1.jpeg')
    },
    ]
  return (
    <div> 

      <Navgood/>
      <div style={{ backgroundColor: 'rgb(234, 240, 255)' }}>
        <div className='container py-5' >
          <h1 className='py-5' style={{ fontSize: '50px', fontWeight: '700' }}>T-Shirts</h1>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='d-flex gap-2'>
              <div><h6>Home</h6></div>
              <div><i class="fa-solid fa-angle-right"></i></div>
              <div><h6>Shop</h6></div>
              <div><i class="fa-solid fa-angle-right"></i></div>
              <div><p>T-Shirts</p></div>
            </div>
            <button className='d-flex gap-2 p-1' style={{ border: "0" }}><i class="fa-solid fa-sliders"></i><h6>Hide filters</h6></button>
            <p className='pt-3'>Filter by price</p>
            {/* -------a line------- */}
            <div className='d-flex justify-content-between'>
              <p style={{ fontSize: '12px' }}>Price: ₹790 — ₹800</p>
              <button className='p-1' style={{ fontSize: '12px', border: '0' }}>Filter</button>
            </div>
            <p className='mt-4 mb-2'>Product Categories</p>
            <div className='d-flex justify-content-between'>
              <h4 style={{ fontSize: '20px' }}>Hoodies & sweatshirts</h4>
              <p className=' ho'>10</p>
            </div>
            <div className='d-flex justify-content-between'>
              <h4 style={{ fontSize: '20px' }}>T-shirts</h4>
              <p className=' h'>2</p>
            </div>
            <div className='d-flex justify-content-between'>
              <h4 style={{ fontSize: '20px' }}>Uncategorized</h4>
              <p className=' ho'>13</p>
            </div>
          </div>
          <div className='col-lg-9 pt-3'>
            <div className='row'>
              <div className='col-lg-7'></div>
              <div className='col-3'><h6>Showing all 2 results</h6></div>
              <div className='col-lg-2'>
                <button className='d-flex gap-2 p-1' style={{ border: "0" }}><div class="dropdown">
                  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Default Sorting
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Default by sorting</a></li>
                    <li><a class="dropdown-item" href="#">Sort by popularity</a></li>
                    <li><a class="dropdown-item" href="#"> Sort by latest</a></li>
                    <li><a class="dropdown-item" href="#"> Sort by price: low to high</a></li>
                    <li><a class="dropdown-item" href="#"> Sort by price: high to low</a></li>
                  </ul>
                </div></button>
              </div>
            </div>
            <div className='col-12'>
            <div className='container'>
        <div className='row' style={{rowGap:"15px"}} >
          {
            eksath.map((a,value) => {
              return (
                <div key={value} className=' col-lg-4 col-md-4 col-sm-12' style={{borderRadius:'20px',}}>
                <div class="card text-center card-hover  " onMouseEnter={()=>mouseEnter(value)} onMouseLeave={mouseLeave} >
                  <img style={{width:'100%',height:"250px",objectFit:"cover",}} src={value==isHover?a.hover:a.url} class="card-img-top" alt="..." />
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
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Shirts
