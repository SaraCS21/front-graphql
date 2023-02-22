import logo from "@assets/logo.png";
import { BiSearch } from 'react-icons/bi';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='w-full flex justify-center items-center p-6 border-b'>
            <nav className='lg:w-[55%] flex justify-between items-center'>
                <div className='flex justify-between items-center'>
                    <img src={logo} alt="logo" />
                </div>

                <div className='w-2/4 flex justify-around items-center mx-2 lg:text-xl lg:m-0'>
                    <Link to={"/"} className="hover:cursor-pointer hover:text-purple mr-2 lg:m-0">Productos</Link>
                    <Link to={"/users"} className="hover:cursor-pointer hover:text-purple">Usuarios</Link>
                </div>

                <div className='lg:w-1/4 flex justify-center items-center'>
                    <input className='w-full h-10 pl-3 rounded-l-lg border' name="search" placeholder='Busca un producto...' />
                    <div className='w-[15%] h-10 flex justify-center items-center bg-purple text-white text-xl rounded-r-lg'>
                        <BiSearch />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header