import React from 'react'

export const WhyChooseCard = () => {
    return (
        <div>
            <div className='border bg-white lg:bg-transparent p-8 rounded-lg flex flex-col lg:flex-row gap-5 items-start'>
                {/* icon */}
                <div className='size-10 rounded-full fl bg-blue-100 flex justify-center items-center'>
                    1
                </div>
                <div className=''>
                    <h1 className='font-medium font-mattone'>Intuitive Document Mangagement</h1>
                    <p className='font-poppins text-[#585858]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    )
}
