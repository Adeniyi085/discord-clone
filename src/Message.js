import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Mesage() {
    return (
        <div className='message'>
            <Avatar />
            <div className='message__info'>
            <h4>
                Adeniyi085
                <span className='message__timestamp'>
                    this is a timestamp 
                </span>
            </h4>
            <p>This is a message</p>
            </div>
        </div>
    )
}

export default Mesage
