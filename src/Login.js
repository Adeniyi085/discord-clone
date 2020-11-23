import React from 'react'
import { Button } from '@material-ui/core';
import { auth } from './firebase';
import { provider } from './firebase'
import './Login.css'
import logo from './assets/discord.svg'



function Login() {
    const signIn =() => {
        //do clever google login
        auth.signInWithPopup(provider).catch((error) => alert(error.message)
        )}
    return (
        <div className='login'>
            <div className= 'login__logo'>
                <img src={logo} alt=''/>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
