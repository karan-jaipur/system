import React from 'react'
// import Nav from './Nav'
import Footer from './Footer'
import Navgood from './Navgood'

const About = () => {
  return (
    <div>
      <Navgood/>
    <div className='bg-black text-white'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <p>Elvish Yadav</p>
            <h3>Creator of quality designs and thinker of fresh ideas.</h3>
            <p>Welcome to Systumm Clothing, where fashion meets passion! Systumm Clothing is the brainchild of none other than the heartthrob of many Indians, Elvish Yadav. With a vision to create a clothing brand that resonates with his audience, Elvish embarked on a journey to turn his dreams into reality.</p>
            <p>Elvish Yadav, a name synonymous with creativity and authenticity, has always had a dream to launch his own clothing line. He believes in the power of fashion to bring people closer, to express individuality, and to make a statement. Through Systumm Clothing, he aims to connect with his audience on a more personal level, ensuring that each piece of apparel reflects the essence of his vision.</p>
            <p>At Systumm Clothing, we stand by our commitment to quality. Elvish Yadav promises never to compromise on the materials, craftsmanship, and design that go into our products. Our clothing is a testament to his unwavering dedication to delivering the best in the most reasonable prices. We believe that everyone deserves to look and feel great, without breaking the bank.</p>
            <p>Join us on this exciting journey of style, comfort, and self-expression. Systumm Clothing is more than just a brand; its a statement, a promise, and a connection. We invite you to explore our collections, discover your own unique style, and become a part of the Systumm family. Welcome to a world where fashion and passion unite. Welcome to Systumm Clothing!</p>
            <div className='d-flex gap-5 '>
              <div><i class="fa-brands fa-facebook"></i></div>
              <div><i class="fa-brands fa-twitter"></i></div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <img className='w-100 h-100' src='https://systumm.com/wp-content/uploads/2023/11/CG-scaled.jpg'/>
          </div>
        </div>
      </div>
      </div>
        <Footer/>

    </div>
  )
}

export default About
