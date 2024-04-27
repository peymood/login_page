import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LoginLink from './LoginLink'
import SignUpLink from './SignUpLink'


function NavBar() {
  return (
     <nav className='navbar' > 
        <div className='navbarlinks'>
            <Link to='/'> برنامه  </Link>
            <LoginLink /> 
            <SignUpLink /> 
        </div>


        
     </nav>
  )
}

export default NavBar