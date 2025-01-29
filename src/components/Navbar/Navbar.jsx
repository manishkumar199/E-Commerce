import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { CgMenu, CgClose } from "react-icons/cg";
import { RxCross2 } from "react-icons/rx";
import { auth } from '../../firebase/firebase';
import toast from 'react-hot-toast';
import Button from '../Button';

const Navbar = ({ cart, userName }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    const handleLogout = () => {
        auth.signOut().then(() => {
            toast.success("Logout successfully");
        }).catch((err) => {
            toast.error(err);
        })
    }

    return (
        <div>
            <header className='bg-white shadow-md w-full fixed top-0 z-10'>
                <div className='mx-auto flex justify-between px-5 py-3.5 items-center'>
                    <div>
                        <Link to={'/'}>
                            <h3 className='font-semibold text-xl border-2 border-[#8490ff] px-2 py-0.5'>
                                Mani<span className='text-[#5138ee] font-bold'>Store</span>

                            </h3>
                        </Link>
                    </div>
                    <div className='hidden md:block'>
                        <ul className='flex gap-5 justify-center font-medium text-base '>
                            <Link to={'/'}><li className='hover:text-[#5138ee] cursor-pointer'>Home</li></Link>
                            <Link to={'/all-products'}><li className='hover:text-[#5138ee] cursor-pointer'>All Products</li></Link>
                            {/* <Link to={'/mens'}><li className='hover:text-[#5138ee] cursor-pointer'>About</li></Link> */}
                            <Link to={'/contact-us'}><li className='hover:text-[#5138ee] cursor-pointer'>Contact</li></Link>
                        </ul>
                    </div>
                    {isOpen ? <div className=''>
                        <ul className='flex flex-col absolute gap-10 z-10 bg-blue-500 text-center h-screen w-full top-[73px] left-0 justify-center font-semibold text-2xl '>
                            <Link to={'/'} onClick={toggleMenu}>
                                <li className='mt-5 hover:text-gray-900 cursor-pointer'>Home</li>
                            </Link>
                            <Link to={'/all-products'} onClick={toggleMenu}>
                                <li className='mt-5 hover:text-gray-900 cursor-pointer'>All Products</li>
                            </Link>
                            {/* <Link to={'/about'} onClick={toggleMenu}>
                                <li className='mt-5 hover:text-gray-900 cursor-pointer'>About</li>
                            </Link> */}
                            <Link to={'/contact-us'} onClick={toggleMenu}>
                                <li className='mt-5 hover:text-gray-900 cursor-pointer'>Contact</li>
                            </Link>
                        </ul>
                    </div> : null}

                    <div className='flex gap-3 justify-center items-center'>

                        {userName ?
                            <>
                                <Link>
                                    <button onClick={handleLogout} className='bg-gray-100 border-0 font-bold py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base'>Logout</button>
                                </Link>
                                <span>{userName}</span>
                            </> :
                            <Link to={'/login'}>
                                <Button>Login</Button>
                            </Link>
                        }

                        <Link to={'/cart'}>
                            <button className='relative'>
                                {cart.length > 0 ? <span className='bg-red-500 px-1.5 rounded-full text-xs text-white absolute bottom-5'>{cart.length}</span> : ''}
                                <IoCartSharp size={30} />
                            </button>
                        </Link>

                        <button className='md:hidden' onClick={toggleMenu}>
                            {isOpen ? <CgClose size={30} /> : <CgMenu size={30} />}
                        </button>

                    </div>

                </div>
            </header>
        </div>
    )
}

export default Navbar