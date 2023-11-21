/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState}from 'react'
import './Login.css'
import '../../App.css'
// eslint-disable-next-line no-unused-vars
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

// eslint-disable-next-line no-unused-vars
import video from '../../LoginAssets/Untitled design.mp4'
import logo from '../../LoginAssets/Untitled-design.png'

import {FaUserShield} from 'react-icons/fa'
import {BsFillShieldLockFill} from 'react-icons/bs'
import {AiOutlineSwapRight} from 'react-icons/ai'
const Login = () => {
  const[loginUserName,setLoginUserName] = useState('')
  const[loginPassword,setLoginPassword] = useState('')
  const navigateTo = useNavigate()

  // eslint-disable-next-line no-unused-vars
  const[loginStatus, setLoginStatus] = useState('')
  const[statusHolder, setStatusHolder] = useState('message')


  const loginUser =(e)=>{


    e.preventDefault();


    Axios.post('http://localhost:3002/login',{
      LoginUserName: loginUserName,
      LoginPassword: loginPassword
    }).then((response)=>{
      console.log(response)
      if(response.data.message || loginUserName == ''|| loginPassword == ''){
        navigateTo('/')
        setLoginStatus('Wrong Username or Password')
      }else{
        navigateTo('/dashboard')
      }
    })
  }

  useEffect(()=>{
    if(loginStatus !== ''){
      setStatusHolder('showMessage')
      setTimeout(()=>{
        setStatusHolder('message')
      },4000);
    }
  },[loginStatus])

  const onSubmit = ()=>{
    setLoginUserName('')
    setLoginPassword('')
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
                <span className="text">Don't have an account?</span>
                <Link to={'/register'}>
                <button className='btn'>Sign Up</button>
                </Link>
              </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="Logo Image"></img>
              <h3>Welcome Back!</h3>
            </div>
            <form className='form grid' onSubmit={onSubmit}>
              <span className={statusHolder}>{loginStatus}</span>
              <div className="inputDiv">
                <label htmlFor='username'>Username</label>
                <div className="input flex">
                  <FaUserShield className='icon'/>
                    <input type="text" id='username' placeholder='Enter Username' onChange={(event)=>{
                      setLoginUserName(event.target.value)
                    }}/>      
                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor='password'>Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className='icon'/>
                    <input type="password" id='password' placeholder='Enter Password' onChange={(event)=>{
                      setLoginPassword(event.target.value)
                    }}/>      
                </div>
              </div>

              <button type='submit' className='btn flex' onClick={loginUser}>
                <span>Login</span>
                <AiOutlineSwapRight className='icon'/>
              </button>

              <span className='forgotPassword'>
                Forgot your password? <a href="">Click Here</a>
              </span>
            </form>
          </div>
      </div>     
    </div>
  )
}

export default Login