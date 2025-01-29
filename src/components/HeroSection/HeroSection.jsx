import React from 'react'
import banner from '../../assets/hero-img.jpg';
import Button from '../Button';

const HeroSection = () => {
    return (
        <div className='relative'>
            <div>
                <img src={banner} alt="" className='w-full mt-20 md:mt-0 object-cover object-center' />
            </div>
            <div className='hidden md:block absolute top-[50%] w-full overflow-hidden text-right'>
                <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-[#5138ee] mr-8'>Discover Your Next Adventure</h1>
                <p className='text-[10px] lg:text-2xl mt-2  mr-8 lg:mt-5 font-medium'>Shop Our Latest Arrival & Unleash Your Style</p>
                <Button style={{ marginTop: "1rem", marginRight: "10rem" }}>Shop Now</Button>
            </div>
        </div>
    )
}

export default HeroSection