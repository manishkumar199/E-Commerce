import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../index.css'

const PopularProducts = ({ addToCart }) => {

    const [popularProducts, setPopularProducts] = useState([])

    const getPopularProducts = async () => {

        try {
            const res = await axios.get(`https://dummyjson.com/cart/1`);
            console.log("ressssss", res.data.products);
            setPopularProducts(res.data.products);

        } catch (error) {
            console.log(error);

        }

    }

    useEffect(() => {
        getPopularProducts();
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-20 mx-auto">
                {/* <h1 className="text-gray-900 text-3xl font-bold tracking-wide title-font mb-10">Popular Products</h1> */}
                <div className="intro-data">Check Now!</div>
                <div className="text-gray-900 text-3xl font-semibold tracking-wide title-font mb-12">Our Popular Products</div>
                <div className="flex flex-wrap -m-4">
                    {popularProducts.map((product) => (
                        <div key={product.id} className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-md">
                            <div className='card-img h-48 bg-zinc-100'>

                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.thumbnail} />

                            </div>
                            <div className="mt-4">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{product.title}</h2>
                                <div className='mt-1 text-sm '>MRP: ₹<del>{(product.price * 12).toFixed()}</del></div>
                                <p className="mt-1 text-sm font-semibold">Price: ₹{(product.price * 10).toFixed()}</p>

                                {/* <button
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 dark:hover:bg-blue-700 dark:hover:ring-blue-800 text-sm mt-2 px-3.5 py-1.5 font-medium rounded-lg"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularProducts