import React from 'react'
import logoImage from "../assets/Logo.png";

export default function Navbar() {
    return (
        <nav className='w-[100%] h-20 flex items-center justify-around sticky'>
            <div className='h-24 w-60  flex justify-center items-center mr-80'>
                <img src={logoImage} alt="OneSpot.tv Logo" className="h-full object-contain " />
            </div>
            <div className='h-16 w-60 flex justify-center items-center ml-60'>
            <p className="text-[26px] font-serif ">Support</p>
            </div>
        </nav>
    )
}
