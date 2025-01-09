import React from 'react'
import heroImg from '../../assets/images/hero.png'

export const Hero = () => {
    return (
        <div className='py-12'>
            <div className='grid lg:grid-cols-3 gap-8 lg:gap-0'>
                <div className='lg:col-span-2 flex justify-center items-center'>
                    <div>
                        <h1 className='font-mattone lg:text-5xl text-2xl max-w-4xl '>Welcome to the QuiTag Tagging Assistant</h1>
                        <p className='font-poppins text-xs text-[#585858] max-w-lg mt-6 leading-normal'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores molestiae nostrum culpa perferendis similique fugit architecto doloribus perspiciatis aut ipsam.</p>
                        <button className='bg-[#70D2C2] text-white text-xs rounded-lg px-4 py-2 mt-6'>Explore Document Models</button>
                    </div>
                </div>
                <div className=''>
                    <img src={heroImg} alt="" className='my-auto' />
                </div>

            </div>
        </div>
    )
}
