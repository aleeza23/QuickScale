import React from 'react'
import Sidebar from './Sidebar'
import { Header } from './Header'

export const Dashboard = ({ children, headerHeading, isUploadDropdown }) => {
    return (
        <div>
            <div className='flex '>
                {/* sidebar */}
                <Sidebar />

                <div className="flex flex-col flex-1">
                    <Header heading={headerHeading} isUploadDropdown={isUploadDropdown} />
                    {/* content */}
                    {children}
                </div>


            </div>
        </div>
    )
}
