import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LoadingSimmer from '../LoadingSimmer/LoadingSimmer';
import Button from '../Button';

const AllProducts = ({ addToCart }) => {

    const [allProducts, setAllProducts] = useState([]);
    const [originalProducts, setOriginalProducts] = useState([]);
    const [allCategory, setAllCategory] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const [minPrice, setMinPrice] = useState("");
    const [maxPrice, setMaxPrice] = useState("");



    const getAllProducts = async () => {

        try {
            const res = await axios.get('https://dummyjson.com/products');
            setAllProducts(res.data?.products);
            setOriginalProducts(res.data?.products);
            console.log(res)

        } catch (error) {
            console.log(error);
        }

    }

    const getAllCategory = async () => {

        try {
            const res = await axios.get('https://dummyjson.com/products/categories');
            setAllCategory(res?.data);
            console.log(res)

        } catch (error) {
            console.log(error);
        }

    }

    const filterProducts = (item) => {
        console.log(item);
        setSelectedProduct(item);

        // Reset to all products if no category is selected
        if (!item || item === "Filter by Product") {
            setAllProducts(originalProducts);
        } else {
            const filteredProducts = originalProducts.filter((product) => product.category === item);
            setAllProducts(filteredProducts);
        }
    };


    useEffect(() => {
        getAllProducts();
        getAllCategory();
        // getSingleProduct();
    }, [])


    const handleBtnSearch = () => {
        const filteredProducts = originalProducts.filter((product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        setAllProducts(filteredProducts);
    }


    const handlePrice = () => {

        let min = parseFloat(minPrice);
        let max = parseFloat(maxPrice);

        const filteredProducts = originalProducts.filter(
            (product) => {
                const price = product.price * 10;
                return (!min || price >= min) && (!max || price <= max);
            }
        );

        setAllProducts(filteredProducts);
    }


    return (
        <>

            <div className="container mx-auto grid grid-cols-[20%_auto] mt-20">
                <div className='bg-[#e2e0e0] max-h-fit pb-10 container mx-auto rounded-md py-3 px-2 mt-12'>
                    {/* <div className='text-center mt-4'>
                        <select className='p-3 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 outline-none' onChange={(e) => filterProducts(e.target.value)}>
                            <option>Filter by Category</option>
                            {
                                allCategory
                                    .slice(0, 5)
                                    .map((item, index) => (
                                        <option value={item.slug} key={index} className='py-1 px-4 rounded'>{item.slug}
                                        </option>
                                    ))
                            }
                        </select>
                        
                    </div> */}
                    <div className='text-center mt-4'>
                        <h3 className='text-lg font-medium'>Filter by Category</h3>
                        <div className='mt-2'>
                            <ul className='space-y-2'>
                                {
                                    allCategory
                                        .slice(0, 5)
                                        .map((item, index) => (
                                            <li key={index} className='text-center'>
                                                <button
                                                    onClick={() => filterProducts(item.slug)}
                                                    className='w-[80%] py-3 px-4 text-sm text-gray-900 hover:bg-zinc-100 rounded-md focus:outline-none'>
                                                    {item.slug}
                                                </button>
                                            </li>
                                        ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='flex flex-col gap-3 mt-10 p-1'>
                        <h3 className='text-lg font-medium text-center mb-4'>Filter by Price</h3>
                        <input type="text" placeholder='min price' className='p-3 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 outline-none' onChange={(e) => setMinPrice(e.target.value)} value={minPrice} />
                        <input type="text" placeholder='max price' className='p-3 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 outline-none' onChange={(e) => setMaxPrice(e.target.value)} value={maxPrice} />

                        <button className='py-2.5 px-5 text-sm font-medium focus:outline-none transition-all bg-blue-600 text-white border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200' onClick={handlePrice}>Filter By Price</button>
                    </div>
                </div>


                <div >
                    <div className='text-center mt-6  text-2xl flex items-center justify-center md:flex-row flex-col gap-3'>
                        <input placeholder='Search items...' value={searchQuery} className='block w-[80%] md:w-[50%] p-3 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500' onChange={(e) => setSearchQuery(e.target.value)} />

                        <button onClick={handleBtnSearch} className='py-2.5 px-5 text-sm font-medium focus:outline-none transition-all bg-blue-600 text-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'>Search</button>
                    </div>

                    {!allProducts.length ? <LoadingSimmer /> :
                        <div className="container px-5 py-12 mx-auto">
                            <div className="flex gap-5 justify-center flex-wrap -m-4">
                                {allProducts.map((item, index) => (
                                    <div key={index} className="lg:w-[27%] md:w-1/2 p-4 w-full bg-[#ffffff] shadow-md rounded-lg max-w-sm">
                                        <Link to={`/single-product/${item.id}`} className="bg-zinc-100 h-48 card-img">
                                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.thumbnail} />
                                        </Link>
                                        <div className="mt-4">
                                            <span className="bg-blue-100 text-blue-800 text-xs tracking-widest font-semibold px-2.5 py-0.5 rounded ml-3 mb-1 mr-2">
                                                {item.rating}
                                            </span>
                                            <h2 className="text-gray-900 text-lg font-normal">{item.title}</h2>
                                            <div className="flex items-center justify-between mt-3">
                                                <p className="text-base font-normal">Price: ₹{(item.price * 10).toFixed()} /-</p>
                                                {/* <button
                                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 dark:hover:bg-blue-700 dark:hover:ring-blue-800 text-sm px-4 py-2 font-medium"
                                            onClick={() => addToCart(item)}
                                        >
                                            Add to Cart
                                        </button> */}
                                                <Button onClick={() => addToCart(item)}>Add to Cart</Button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>}
                </div>

            </div>








        </>
    )
}

export default AllProducts