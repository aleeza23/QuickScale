import React from 'react'

export const Card = () => {
    return (
        <div>
            <div className="bg-white flex flex-col justify-center items-center px-4 py-6 rounded-lg shadow-sm">
                <div className='bg-[#25BDE41A] rounded-full h-24 w-24 mb-8 flex justify-center items-center'><span>Icon</span></div>
                <div className="text-[#556DE1] bg-blue-100 text-sm mb-2  font-poppins rounded-full px-2">STEP-1</div>
                <h1 className='font-mattone'>Create a New Model</h1>
                <p className='text-center font-poppins mt-3 text-m text-[#585858]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur, ea at similique eius necessitatibus quibusdam.</p>

            </div>
        </div>
    )
}
