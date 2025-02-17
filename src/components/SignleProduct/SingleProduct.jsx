import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom'
import StarRating from '../StarRating/StarRating';

const SingleProduct = ({ addToCart }) => {

    const [singleProduct, setSingleProduct] = useState("");

    const { id } = useParams();

    const getSingleProducts = async () => {

        try {
            const res = await axios.get(`https://dummyjson.com/products/${id}`);
            console.log(res.data);
            setSingleProduct(res.data);

        } catch (error) {
            console.log(error);
        }

    }

    useEffect(() => {
        getSingleProducts();
    }, [id])


    const addSingleProduct = () => {
        addToCart(singleProduct);
        toast.success(`Product Added to Cart`);
    }

    return (
        <>
            <section class="text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={singleProduct.thumbnail} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">{singleProduct.brand}</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{singleProduct.title}</h1>
                            <div class="flex mb-4">
                                <div class="flex items-center">
                                    <StarRating rating={singleProduct.rating} />

                                    <div class="text-gray-600 ml-3 mt-1">{singleProduct.rating} Reviews</div>
                                </div>
                                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a class="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a class="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a class="text-gray-500">
                                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p class="leading-relaxed mb-5">{singleProduct.description}</p>
                            <div class="">
                                <div class="font-medium text-xl text-gray-500 my-2"><del>MRP: ₹{(singleProduct.price * 12).toFixed()}</del></div>
                                <div class="title-font font-medium text-2xl text-gray-900 mb-5">Selling Price: ₹{(singleProduct.price * 10).toFixed()}</div>

                                <button onClick={addSingleProduct} class="flex text-white bg-[#5138ee] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600">Add to Cart</button>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleProduct