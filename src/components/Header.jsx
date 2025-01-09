import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'

export const Header = ({ heading, isUploadDropdown }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <div className='lg:h-16 py-2 bg-white flex flex-wrap justify-between gap-4 lg:gap-0 items-center px-8'>

            <div className='flex gap-3'>
                <img src={logo} alt="" />
                {heading && <div className='bg-gradient-to-b hidden lg:block w-[.9px] flex-shrink-0 from-[#00000000] via-[#000000] to-[#00000000]'></div>}
                <h2 className='font-poppins hidden lg:block font-medium text-xl mt-auto'>{heading}</h2>
            </div>


            {isUploadDropdown && <div className="relative inline-block text-left">
                <button
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium font-poppins leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                    type="button"
                    onClick={toggleDropdown}
                >
                    <span>Energy Performance Certificate</span>
                    <svg
                        className="w-5 h-5 ml-2 -mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                {isOpen && (
                    <div className="dropdown-menu transition-all duration-300 transform origin-top-right">
                        <div className="absolute right-0 w-full mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                            <div className="px-4 py-3">
                                <p className='font-poppins'>Financial Statements</p>
                            </div>

                        </div>
                    </div>
                )}
            </div>}

        </div>
    )
}
