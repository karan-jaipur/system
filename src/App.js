// ------------------------------------------System-----
import React from 'react'
import Nav from './Component/System/Nav'
import "./App.css"
import About from './Component/System/About'
import Contact from './Component/System/Contact'
import User from './Component/System/User'
import Tshirts from './Component/System/Tshirts'
import Hodddies from './Component/System/Hodddies'
import Cart from './Component/System/Cart'
import { BrowserRouter,Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Nav/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
        <Route path='/User' element={<User/>}></Route>
        <Route path='/tshirt' element={<Tshirts/>}></Route>
        <Route path='/Hoddies' element={<Hodddies/>}></Route>
        <Route path='/Cart' element={<Cart/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


// import React from 'react'
// import Nav from './Component/Cyber/Nav'
// import Footer from './Component/Cyber/Footer'
// import Allcourse from './Component/Cyber/Allcourse'
// import Tabs from './Component/Class/Tabs'
// import Cardmap from './Component/Cyber/Cardmap'
// import Allfirstpage from './Component/Cyber/Allfirstpage'
// import Certification from './Component/Cyber/Certification'
// import One from './Component/ExtraClass/One'
// // import Memo from './Component/Memo'



// const App = () => {
//   return (
//     <div>
//      {/* <Memo/> */}
//       {/* <One/> */}
//       {/* <Certification/> */}
//       {/* <Allfirstpage/> */}
//       {/* <Allcourse/> */}
//       {/* <Cardmap/> */}
//       {/* <Tabs/> */}
//       {/* <Footer/> */}
//       {/* <Nav/> */}
//     </div>
//   )
// }

// export default App





// import G from './Component/G'
{/* <G/> */}
// import Newera from './Component/Newera/Newera'
{/* <Newera/> */}
// import React from 'react'
// // import First from './Component/First'
// import Rahulnav from './Component/Rahulseth/Rahulnav'
// import RahulFirst from './Component/Rahulseth/RahulFirst'
// import RahulProject from './Component/Rahulseth/RahulProject'
// import RahulGuest from './Component/Rahulseth/RahulGuest'
// import { BrowserRouter,Routes ,Route } from 'react-router-dom'


// const App = () => {
//   return (
//     <div>
//       {/* -----------Rahul site -------- */}
//       <BrowserRouter>
//       <Routes>
//         {/* <Route path='/' element={<Rahulnav/>}></Route> */}
//         <Route path='/' element={<RahulFirst/>}></Route>
//         <Route path='/guest' element={<RahulGuest/>}></Route>
//         <Route path='/project' element={<RahulProject/>}></Route>
//       </Routes>
//       </BrowserRouter>
     
//     </div>
//   )
// }

// export default App
{/* -------------Netflix---
<First/> */}


// -------tinjo website-----
// import React from 'react'
// import Tinjowork from './Component/tinjo-website-assets/Tinjowork'
// import Tinjoblog from './Component/tinjo-website-assets/Tinjoblog'
// import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import Home from './Component/Home'

// const App = () => {


//   return (
//     <div>


//       <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Home/>}></Route>
//           <Route path='/Tinjoblog' element={<Tinjoblog/>}></Route>
//           <Route path='/Tinjowork' element={<Tinjowork/>}></Route>
//         </Routes>
//       </BrowserRouter>

//     </div>
//   )
// }

// export default App
