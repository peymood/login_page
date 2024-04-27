import React from 'react'
import { NavLink } from 'react-router-dom'

function SignUpLink() {
  return (
    <ul className='ul' >
        <li><NavLink to='/SignUp' target='_blank' >ثبت نام </NavLink></li>
    </ul>
  )
}

export default SignUpLink