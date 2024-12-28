import React from 'react'

const Button = ({ children, onClick, style }) => {
    return (
        <button
            className="text-white bg-[#5138ee] hover:bg-blue-800 focus:ring-4 dark:hover:bg-blue-700 dark:hover:ring-blue-800 text-sm px-4 py-1.5 font-medium"
            onClick={onClick}
            style={style}
        >
            {children}
        </button>
    )
}

export default Button