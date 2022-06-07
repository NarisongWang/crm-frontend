import React from 'react'
import './message-history.style.css'

export const MessageHistory = ({msg}) => {
    if(!msg) return null
    return msg.map((row, i)=>(
        <div key={i} className="message-history">
            <div className='send'>
            <div className='sender mt-3'>{row.messageBy}</div>
                <div className='date mt-3'>{row.date}</div>
            </div>
            <div className='message mt-3'>{row.message}</div>
        </div>
    ));

}
