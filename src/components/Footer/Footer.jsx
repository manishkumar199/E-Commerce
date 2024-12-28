import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Button from '../Button';

const Footer = () => {
    return (
        <footer className='bg-[#0a1435] text-white'>
            <div className=' container px-5 py-24 mx-auto flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
                <div className='w-64 md:mx-0 text-center md:text-left'>
                    <Link to={'/'}>
                        <h3 className='w-fit font-semibold text-xl border-2 border-[#8490ff] px-2 py-0.5'>
                            Mani<span className='text-[#5138ee] font-bold'>Store</span>

                        </h3>
                    </Link>

                </div>
                <div className='flex flex-grow flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center'>
                    <div className='w-full md:w-1/2 lg:w-1/4'>
                        <h2 className='title-font font-medium tracking-widest text-lg mb-3'>
                            MENU
                        </h2>
                        <ul className='list-none text-sm mb-10'>
                            <li className='mt-1'>Features</li>
                            <li className='mt-1'>Info Center</li>
                            <li className='mt-1'>News Blog</li>
                            <li className='mt-1'>Login</li>
                        </ul>
                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/4'>
                        <h2 className='title-font font-medium tracking-widest text-lg mb-3'>COMPANY</h2>
                        <ul className='list-none text-sm mb-10'>
                            <li>About Us</li>
                            <li>Privacy Policy</li>
                            <li>Terms & Condition</li>
                            <li>Login</li>
                        </ul>

                    </div>
                    <div className='w-full md:w-1/2 lg:w-1/4'>
                        <h2 className='title-font font-medium tracking-widest text-lg mb-3'>CONTACT</h2>
                        <ul className='list-none text-sm mb-10'>
                            <li>Contact Sales</li>
                            <li>+12369592689</li>
                            <li>News Blog</li>
                            <li>+21659567</li>
                        </ul>

                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/4">
                        <h3 className='title-font font-medium tracking-widest text-lg mb-3'>Subscribe to get important updates</h3>
                        <form action="#">
                            <input type="email" name="email" placeholder="YOUR E-MAIL" />

                            {/* <input className='bg-[#5138ee] border-0 mt-3 font-semibold py-1.5 px-5 focus:outline-none text-white hover:text-[black] text-base' type="submit" value="Subscribe" /> */}

                            <Button style={{ marginTop: "1rem" }}>Subscribe</Button>
                        </form>
                    </div>

                </div>
            </div>
            <div className='bg-[#0a1435] border-t-4 text-white'>
                <div className='w-full py-3 px-5 flex flex-wrap flex-col items-center justify-around sm:flex-row'>
                    <div>
                        <p className='text-sm text-center sm:text-left'>
                            © Copyright {new Date().getFullYear()} Manish Kumar. All Rights Reserved

                        </p>
                    </div>
                    <div>
                        <p className='inline-flex gap-2 sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start'>
                            <span><FaFacebook size={30} /></span>
                            <span><FaInstagram size={30} /></span>
                            <span><FaXTwitter size={30} /></span>
                            <span></span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer