import React from 'react'
import { NavLink } from 'react-router-dom'

function Login() {
  return (
    <ul>
        <li><NavLink to='/login' className='login' target='_blank' >ورود </NavLink></li>
    </ul>
  )
}

export default Login