import React from 'react'
import img1 from '../../assets/lovepik-cute-teenage-girl-shopping-png-image_401663906_wh1200.png'
import img2 from '../../assets/portrait-pretty-happy-girl-talking-mobile-phone.jpg'
import img3 from '../../assets/two-cheerful-girls-sweaters-having-fun-together-with-shopping-trolley.jpg'
import img4 from '../../assets/two-happy-girls-sweaters-having-fun-with-shopping-trolley-megaphone-white-wall.jpg'
import img5 from '../../assets/pngwing.com.png'
import img6 from '../../assets/depositphotos_408110334-stock-photo-full-length-body-size-view.jpg'

const Gallery = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    {/* <div class="flex w-full mb-20 flex-wrap">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Master Cleanse Reliac Heirloom</h1>
                        <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
                    </div> */}
                    <div class="flex flex-wrap md:-m-2 -m-1">
                        <div class="flex flex-wrap w-1/2 hover:scale-110 hover:translate-x-4 hover:skew-y-3 transition duration-500">
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={img1} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={img2} />
                            </div>
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={img3} />
                            </div>
                        </div>
                        <div class="flex flex-wrap w-1/2 hover:scale-110 hover:translate-x-4 hover:skew-x-3 transition duration-500">
                            <div class="md:p-2 p-1 w-full">
                                <img alt="gallery" class="w-full h-full object-cover object-center block" src={img4} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={img5} />
                            </div>
                            <div class="md:p-2 p-1 w-1/2">
                                <img alt="gallery" class="w-full object-cover h-full object-center block" src={img6} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>/
        </>
    )
}

export default Gallery