import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import './Sign.css'
import { Link } from 'react-router-dom'
import Validation from '../../Context/SignupValidation'

export const Sign = () => {
    const [values,setValues] = useState({
        name: '',
        email:'',
        password:''
    })
    const navigate = useNavigate();
    const [errors,setErrors] = useState({})
    const handleInput =(event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
    };
    
  return (
    <div className='signup'>
        <h2>Sign Up</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className="mdb--3">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder='Enter Your Name'
                onChange={handleInput} className='from--inp'/>
                {errors.name && <span className='tex--error'>{errors.name}</span>}
            </div>
            <div className="mdb--3">
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Your Email'
                onChange={handleInput} className='from--inp'/>
                {errors.email && <span className='tex--error'>{errors.email}</span>}
            </div>
            <div className="mdb--3">
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Your Password' 
                onChange={handleInput} className='from--inp'/>
                {errors.password && <span className='tex--error'>{errors.password}</span>}
            </div>
            <button type='submit' className='log--in'>Sign Up</button>
            <p>You are agree to our terms and policies</p>
            <Link to='/login'><button className='btn--account'>Login</button></Link>
        </form>
    </div>
  )
}
