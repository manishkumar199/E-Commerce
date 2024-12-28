import React from 'react'
import HeroSection from '../../components/HeroSection/HeroSection'
import Service from '../../components/Service/Service'
import Gallery from '../../components/Gallery/Gallery'
import PopularProducts from '../../components/PopularProducts/PopularProducts'
import Testimonial from '../../components/Testimonial/Testimonial'

const Home = ({ addToCart }) => {
    return (

        <>
            <HeroSection />
            <Service />
            <PopularProducts addToCart={addToCart} />
            <Gallery />
            <Testimonial />
        </>
    )
}

export default Home