import React from 'react'
import { NavLink } from 'react-router-dom'

function SignUp() {
  return (
    <ul className='signUp' >
        <li><NavLink to='/SignUp' target='_blank' >ثبت نام </NavLink></li>
    </ul>
  )
}

export default SignUp