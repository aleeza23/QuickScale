import React from 'react'

export const Content = ({ children }) => {
    return (
        <div className=' bg-[#F8F4F1] flex-1 overflow-y-auto  '>
            <div className='container px-4'>
                {children}
            </div>
        </div>
    )
}
