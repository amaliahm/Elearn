import React, { useRef, useState } from "react";
import './auth.css';

const ResetPW = () => {
    const emailRef = useRef()

    return (
        <div className="form-container sign-up-container">
            <form action="#" className='form-registration'>
                <h1 className='m-0'>Reset Password</h1>
                <div className="input">
                    <i className="fa-regular fa-at fa-xl"></i>
                    <input type='email' name='' placeholder='email' ref={emailRef} required />
                    <span className='input-border'></span>
                </div>
                <button type="button" >
                    send email
                </button>
            </form>
        </div>
    )
}

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    return (
        <div className="form-container sign-in-container">
            <form action='#' className='form-registration'>
              <h1 className='m-0'>Sign in</h1>
              <div className="input">
                <i className="fa-regular fa-at fa-xl"></i>
                <input type='email' name='' placeholder='email' ref={emailRef} required/>
                <span className='input-border'></span>
              </div>
              <div className="input">
                <i className="fa-solid fa-lock fa-xl"></i>
                <input type='password' name='' placeholder='password' ref={passwordRef} required/>
                <span className='input-border'></span>
              </div>
              <button type="button">sign in</button>
          </form>
        </div>
    )

}

const LoginComponent = () => {
    const [right, setRight] = useState(false)

  const addRight = () => {
    setRight(!right);
  }

    return (
      <div className="app_without_bg">
        <div className='auth'>
          <div className="box">
            <div className={`${right ? 'container right-panel-active' : 'container'}`}>
              <Login />
              <ResetPW />
              <div className='overlay-container'>
                <div className="overlay">
                  <div className='overlay-panel overlay-right'>
                    <h1 className='m-0'>Forget Password!!</h1>
                    <button className='ghost' onClick={addRight}>reset password</button>
                  </div>
                  <div className='overlay-panel overlay-left'>
                    <h1 className='m-0'>Welcome Back!</h1>
                    <button className='ghost' onClick={addRight}>sign in</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default LoginComponent