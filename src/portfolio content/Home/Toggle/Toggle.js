import React from 'react'
import './Toggle.css'
import Sun from '../../../assets/Home/sun.png'
import Moon from '../../../assets/Home/moon.png'

export default function Toggle() {
    return (
        <div className="toggle"> 
            <img src={Sun} alt="" className="toggle-icon" />
            <img src={Moon} alt="" className="toggle-icon" />
            <div className="toggle-button"></div>
        </div>
    )
}
