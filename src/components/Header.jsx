import React from 'react';
import logo from "@assets/logo.png";

import { BiSearch } from 'react-icons/bi';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsSuitHeart } from 'react-icons/bs';



const Header = () => {
    return (
        <header className='w-full flex justify-center items-center p-6 border-b'>
            <nav className='w-[60%] flex justify-between items-center'>
                <div className='w-[8%] flex justify-between items-center'>
                    <img src={logo} alt="logo" />
                </div>

                <div className='w-2/4 flex justify-center items-center'>
                    <input className='w-full h-10 pl-3 rounded-l-lg border' name="search" placeholder='Busca un producto...' />
                    <div className='w-[10%] h-10 flex justify-center items-center bg-purple text-white text-xl rounded-r-lg'>
                        <BiSearch />
                    </div>
                </div>
                
                <div className='w-1/4 flex justify-between items-center' >
                    <div className='flex justify-center items-center'>
                        <AiOutlineUser className='text-3xl'/>
                        <div className='pl-2'>
                            <p className='text-[0.7rem] text-zinc-400'>Sign in</p>
                            <p className='text-[1rem]'>Account</p>
                        </div>
                    </div>

                    <div className='flex justify-center items-center relative'>                        
                        <BsSuitHeart className='text-3xl' />
                        <div className='w-[1.1rem] h-[1.1rem] flex justify-center items-center rounded-full text-[0.6rem] text-white bg-red-500 absolute bottom-5 left-5'>0</div>
                    </div>

                    <div className='flex justify-center items-center relative'>
                        <AiOutlineShoppingCart className='text-3xl'/>
                        <div className='pl-2'>
                            <p className='text-[0.7rem] text-zinc-400'>Total</p>
                            <p className='text-[1rem]'>$0.00</p>
                        </div>
                        <div className='w-[1.1rem] h-[1.1rem] flex justify-center items-center rounded-full text-[0.6rem] text-white bg-red-500 absolute top-0 left-4'>0</div>
                    </div>
                        
                    </div>
            </nav>
        </header>
    )
}

export default Header