import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
const Service = () => {
    return (
        <div className='container flex justify-center items-center gap-10 flex-wrap mx-auto px-5 py-11'>
            <div className='bg-[#5138ee] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
                <TbTruckDelivery className='w-12 h-12 p-2 rounded-full bg-[#fff] text-[#5138ee]' size={30} />
                <p>FREE SHIPPING</p>
            </div>
            <div className='bg-[#5138ee] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
                <MdSecurity className='w-12 h-12 p-2 rounded-full bg-[#fff] text-[#5138ee]' size={30} />
                <p>AUTHENTIC PRODUCTS</p>
            </div>
            <div className='bg-[#5138ee] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
                <TbTruckReturn className='w-12 h-12 p-2 rounded-full bg-[#fff] text-[#5138ee]' size={30} />
                <p>EASY RETURS</p>
            </div>
            <div className='bg-[#5138ee] py-3 px-5 rounded text-white flex gap-2 flex-col items-center w-[220px] hover:scale-110 transition duration-500'>
                <MdPayment className='w-12 h-12 p-2 rounded-full bg-[#fff] text-[#5138ee]' size={30} />
                <p>SECURE PAYMENTS</p>
            </div>
        </div>
    )
}

export default Service