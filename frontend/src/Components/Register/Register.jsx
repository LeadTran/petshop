// eslint-disable-next-line no-unused-vars
import React, {useState}from 'react'
import './Register.css'
import '../../App.css'
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

// eslint-disable-next-line no-unused-vars
import video from '../../LoginAssets/Untitled design.mp4'
import logo from '../../LoginAssets/Untitled-design.png'

import {FaUserShield} from 'react-icons/fa'
import {MdMarkEmailRead} from 'react-icons/md'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
const Register = () => {
  const[email,setEmail] = useState('')
  const[userName,setUserName] = useState('')
  const[password,setPassword] = useState('')
  const navigateTo = useNavigate()


  const createUser =(e)=>{
    e.preventDefault()
    Axios.post('http://localhost:3002/register',{
      Email: email,
      UserName: userName,
      Password: password
    }).then(()=>{
      console.log('User has been created')
      navigateTo('/')
      setEmail('')
      setUserName('')
      setUserName('')
    })
  }

  return (
    <div className='loginPage flex'>
      <div className="container flex">
          <div className="videoDiv">
              <video src={video} autoPlay muted loop></video>
              <div className="textDiv">
                <h2 className='title'>Create and Buy Pet Products</h2>
                <p>Quality</p>
              </div>
              <div className="footerDiv flex">
                <span className="text">Have an account?</span>
                <Link to={'/'}>
                <button className='btn'>Login</button>
                </Link>
              </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="Logo Image"></img>
              <h3>Let Us Know You!</h3>
            </div>
            <form action='' className='form grid'>
              <div className="inputDiv">
                <label htmlFor='email'>Email</label>
                <div className="input flex">
                  <MdMarkEmailRead className='icon'/>
                    <input type="email" id='email' placeholder='Enter Email' onChange={(event)=>{
                      setEmail(event.target.value)
                    }}/>      
                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor='username'>Username</label>
                <div className="input flex">
                  <FaUserShield className='icon'/>
                    <input type="text" id='username' placeholder='Enter Username' onChange={(event)=>{
                      setUserName(event.target.value)
                    }}/>      
                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor='password'>Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className='icon'/>
                    <input type="password" id='password' placeholder='Enter Password' onChange={(event)=>{
                      setPassword(event.target.value)
                    }}/>      
                </div>
              </div>

              <button type='submit' className='btn flex' onClick={
                createUser
              }>
                <span>Register</span>
                <AiOutlineSwapRight className='icon'/>
              </button>
            </form>
          </div>
      </div>     
    </div>
  )
}

export default Register