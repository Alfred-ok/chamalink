'use client'


import React, { useState } from 'react'
import Styles from './signin.module.css'
import KawilabLogo from '../../public/modification1.png'
import Image from 'next/image'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GoogleIcon from '../../public/signin-up resources/icons8-google-96.png'
import { TextField } from '@mui/material'
import Link from 'next/link'

export default function Page({useradd}) {
  const [user, setUser] = useState(false)

  const handleuser = ()=>{
    setUser(true)
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    useradd(user);
  };
  return (
    <div className={Styles.SignIn}>

      <div className={Styles.formContainer}>
          <div className={Styles.logoContainer}>
            <h1> Chama Link </h1>
          </div>
          <form className={Styles.form} onSubmit={handleSubmit}>
              <div className={Styles.email}>
                <MailOutlineIcon size="small" style={{fontSize: '18px'}} className={Styles.emailIcon}/>
                <input className={Styles.emailInput} type='text' placeholder='Enter Your Email' required/>
              </div>
              <div className={Styles.password}>
                <LockOutlinedIcon size="small" style={{fontSize: '18px'}} className={Styles.PasswordIcon}/>
                <input className={Styles.passwordInput} type='password' placeholder='Enter Your Password' required />
              </div>
              <div className={Styles.CheckboxForgotPassword}>
                <div  className={Styles.checkboxRemember}>
                  <input type='checkbox'  className={Styles.checkbox}/>
                  <label>Remember me</label>
                </div>
                <div className={Styles.forgot}>Forgot Password?</div>
              </div>
              <button className={Styles.signinButton} onClick={handleuser}>Sign In</button>
              <h6 className={Styles.Noaccount}>Don't have an acccount? <Link href='/signup'>Sign Up</Link></h6>
              <div className={Styles.line}></div>
              <button className={Styles.google}>
                <Image src={GoogleIcon} height={25} alt='google signup logo' className={Styles.googleImg}/>
                Login with Google
              </button>
          </form>
      </div>
    </div>
  )
}
