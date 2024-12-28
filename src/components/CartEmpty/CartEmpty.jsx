import React from 'react'
import { Link } from 'react-router-dom'

const CartEmpty = () => {
    return (
        <div className='w-full h-auto mt-28 bg-[#f7f6f6] my-8 px-4 py-8 shadow-lg rounded-md container mx-auto flex justify-center'>
            <div className='flex flex-col gap-4'>
                <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" className='w-72' />

                <h3 className='text-center text-2xl font-semibold mt-3'>Your Cart is Empty!!</h3>
                <Link className='text-center' to={'/'}>
                    <button className="text-white bg-[#5138ee] hover:bg-blue-800 focus:ring-4 text-sm px-5 py-2 font-medium">Go to Home</button>
                </Link>
            </div>
        </div>
    )
}

export default CartEmpty