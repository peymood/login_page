import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'

function NavBar() {
  return (
     <nav className='navbar' > 
        <div className='navbarlinks'>
            <Link to='/'> برنامه  </Link>
            <Login /> 
            <SignUp /> 
        </div>


        
     </nav>
  )
}

export default NavBar