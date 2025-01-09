import React from 'react'
import logo from '../assets/images/logo sidebar.svg'
import uploadIcon from '../assets/images/upload icon.svg'
import fileIcon from '../assets/images/file icon.svg'



const Sidebar = () => {
    return (
        <div className='bg-darkBlue w-24 flex-shrink-0 py-4 '>
            <div className="flex flex-col justify-center items-center gap-10 text-white">
                <img src={logo} alt="" />
                <div>
                    <a href="/upload"><img src={uploadIcon} alt="" className='bg-[#ffffff1a] p-3 rounded-lg size-12' /></a>
                    <a href=""><img src={fileIcon} alt="" className='bg-[#ffffff1a] p-3 rounded-lg size-12 mt-4' /></a>

                </div>

            </div>
        </div>
    )
}

export default Sidebar