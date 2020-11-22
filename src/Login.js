import React from 'react'
import './Login.css'
import logo from './assets/discord.svg'



function Login() {
    const signIn =() => {
        //do clever google login
    }
    return (
        <div className='login'>
            <div className= 'login__logo'>
                <img src={logo} alt=''/>
            </div>
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login
