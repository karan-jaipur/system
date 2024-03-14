import React from 'react'
import { NavLink } from 'react-router-dom'
import Rahulnav from './Rahulnav'
import RahulFirst from './RahulFirst'
import RahulGuest from './RahulGuest'
import RahulProject from './RahulProject'

const Rahul = () => {
  return (
    <div>
      <NavLink to='/'><Rahulnav/></NavLink>
      <NavLink to='/'><RahulFirst/></NavLink>
      <NavLink to='/guest'><RahulGuest/></NavLink>
      <NavLink to='/project'><RahulProject/></NavLink>
    </div>
  )
}

export default Rahul
