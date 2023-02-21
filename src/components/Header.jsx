import React from 'react';
import logo from "@assets/logo.png";
import { BiSearch } from 'react-icons/bi';

const Header = () => {
    return (
        <header className='w-full flex justify-center items-center p-6 bg-slate-300'>
            <nav className='w-1/4 flex justify-center items-center'>
                <img src={logo} alt="logo" />
                <div className='w-2/4 flex'>
                    <input className='w-full p-1' name="search" placeholder='Busca un producto...' />
                    <div className='p-2 bg-blue-600 text-white'>
                        <BiSearch />
                    </div>
                    <div></div>
                </div>
            </nav>
        </header>
    )
}

export default Header