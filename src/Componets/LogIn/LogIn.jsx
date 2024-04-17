import React, { useState } from 'react';
import './LogIn.css';
import { Link } from 'react-router-dom';
import Validation from '../../Context/LoginValidation';


export const LogIn = () => {
    const [values,setValues] = useState({
        email:'',
        password:''
    })
    const [errors,setErrors] = useState({})
    const handleInput =(event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) =>{
        event.preventDefault();
        setErrors(Validation(values));
    }


  return (
    <div className='login'>
        <h2>Login</h2>
        <form action="" >
            <div className="mdb--3">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Your Email' name='email' className='from--inp'/>
                {errors.email && <span className='tex--error'>{errors.email}</span>}
            </div>
            <div className="mdb--3">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Your Password' name='password' className='from--inp'/>
                {errors.password && <span className='tex--error'>{errors.password}</span>}
            </div>
            <button type='submit' className='log--in'>Login</button>
            <p>You are agree to our terms and policies</p>
            <Link to='/signup'><button className='btn--account'>Create Account</button></Link>
        </form>
    </div>
  )
}
