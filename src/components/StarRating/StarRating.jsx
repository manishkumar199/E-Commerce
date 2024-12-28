import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";


const StarRating = ({ rating }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;

        return (
            <span key={index}>
                {rating >= index + 1 ? <FaStar className='text-yellow-300' /> : rating >= number ? <FaStarHalfAlt className='text-yellow-300' /> : <FaRegStar className='text-yellow-300' />}
            </span>
        )

    })
    return (
        <div className='flex'>

            {ratingStar}

        </div>
    )
}

export default StarRating