import React from 'react'
import { Dashboard } from '../components/Dashboard'
import { Content } from '../components/Content'
import uploadIcon from '../assets/images/file upload 03.svg'

export const Upload = () => {
    return (
        <Dashboard headerHeading={'Your Document Model'} isUploadDropdown={true}>
            <Content>
                <div className="bg-white rounded-lg p-4 my-6">
                    <h1 className='font-mattone mb-2'>Document</h1>

                    <div>
                        <div className="grid lg:grid-cols-3 gap-6">
                            <div className='border p-6 lg:col-span-2 rounded-lg'>
                                <div className=' p-12'>
                                    <div className='p-8'>
                                        <h1 className='font-mattone text-center text-sm'>Select a representative set of files to start building with. </h1>
                                        <p className='text-center text-sm text-[#667085] font-poppins'>Five files of each document type is a good start.</p>

                                        <div className='border border-dashed flex flex-col justify-center items-center border-[#66C3B4] rounded-lg h-72 mt-10'>
                                            <img src={uploadIcon} alt="" />
                                            <h2 className='font-mattone mt-6'>Drop anywhere to upload</h2>
                                            <p className='font-poppins text-[#667085] text-sm max-w-sm mx-auto text-center mt-2'>AI Hub supports uploading most file types upto 50 MB. For details, see <a href="" className='text-[#FC8043]'>Supported file types.</a> </p>
                                            <button className='rounded bg-[#D7DCFF] px-5 py-2 font-poppins text-sm mt-3'>Browse files</button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='border p-6 rounded-lg'></div>
                        </div>
                    </div>
                </div>
            </Content>
        </Dashboard>
    )
}
