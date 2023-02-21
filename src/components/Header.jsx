import React from 'react'
import logo from "@assets/logo.png"

const Header = () => {
    return (
        <header className='w-full flex justify-start items-center p-6 bg-slate-300'>
            <nav className='w-1/4 flex flex-col items-center'>
                <img src={logo} alt="logo" />
                <p>Product Shop</p>
            </nav>
        </header>
    )
}

export default Header