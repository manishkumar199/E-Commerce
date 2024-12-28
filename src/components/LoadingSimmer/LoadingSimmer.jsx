import React from 'react'

const LoadingSimmer = () => {

    const arrayLength = new Array(9).fill("");

    return (
        <div className="container px-5 py-24 mx-auto">
            <div className="flex gap-5 justify-center flex-wrap -m-4">
                {arrayLength.map((el, i) => (
                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full bg-[#ffffff] shadow-md rounded-lg max-w-sm">
                        <div className='w-full h-[200px] bg-[#ccc]'></div>
                        <div className="mt-4">
                            <div className="bg-[#ccc] h-5 w-12  tracking-widest font-semibold px-2.5 py-0.5 rounded mb-3 mr-2">
                            </div>
                            <h2 className="text-gray-900 title-font text-lg font-medium bg-[#ccc] h-6 w-2/3 rounded-md"></h2>
                            <div className="flex items-center justify-between mt-4">
                                <p className="mt-1 text-xl font-bold bg-[#ccc] h-6 w-20 rounded-md"></p>
                                <button
                                    className="text-white bg-[#ccc] h-8 w-28 rounded-md  px-5 py-2.5 font-medium"

                                >
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default LoadingSimmer