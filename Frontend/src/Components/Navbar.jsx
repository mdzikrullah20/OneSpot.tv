import React from 'react'
import logoImage from "../assets/Logo.png";

export default function Navbar() {
    return (
        <nav className='w-[100%] h-24 flex items-center justify-around '>
            <div className='h-24 w-60  flex justify-center items-center mr-96'>
                <img src={logoImage} alt="OneSpot.tv Logo" className="h-full object-contain " />
            </div>
            <div className='h-16 w-60 flex justify-center items-center ml-40'>
                <h1 className='text-20'>Support</h1>
            </div>
        </nav>
    )
}
