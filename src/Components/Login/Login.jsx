import React, { useState } from 'react'
import s from './Auth.module.css'
import {useDispatch, useSelector} from 'react-redux'
import { setUser } from '../../Redux/reducers/loginReducer';
import { NavLink } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const dispatch = useDispatch();
  return (
    <div className={s.main}>
      <h2>Login</h2>
      <input placeholder='email' value={email} onChange = {(e) => setEmail(e.target.value)}/>
      <input placeholder='password' value={pass} onChange = {(e) => setPass(e.target.value)} type='password'/>
      <NavLink to = '/'>
	      <button onClick={() => dispatch(setUser({email: email, pass: pass}))}>Submit</button>
      </NavLink>

   <NavLink to = '/sign_in'>Don't have an account?</NavLink>
    </div>
  )
}

export default Login;