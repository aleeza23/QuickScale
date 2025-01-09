import React from 'react'
import uploadIcon from '../../assets/images/upload icon 02.svg'

export const DocumentModels = () => {
    return (
        <div className='pb-16 hidden lg:block '>
            <div className='flex justify-between items-center'>
                <h1 className='font-mattone'>Document Models</h1>
                <button className='bg-[#70D2C2] text-white text-xs rounded-lg px-4 py-2 mt-6 inline-flex items-center gap-3'><img src={uploadIcon} alt="" /><span>Create a new model</span></button>
            </div>



            <div class="shadow-md sm:rounded-lg my-6 ">
                <table class="w-full text-sm text-left rtl:text-right text-blue-100 dark:text-blue-100 overflow-x-auto">
                    <thead class="text-xs bg-white text-[#667085] ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Model Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                                # of Data Points
                            </th>
                            <th scope="col" class="px-6 py-3">
                                # of Covered Languages
                            </th>
                            <th scope="col" class="px-6 py-3">
                                # of Documents
                            </th>
                            <th scope="col" class="pe-48 py-3">
                                Accuracy
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-[#F9FAFB] border-b border-t text-[#667085]">
                            <th scope="row" class="px-6 py-4 font-medium font-mattone text-[#101828]">
                                Apple MacBook Pro 17"
                            </th>
                            <td class="px-6 py-4">
                                32
                            </td>
                            <td class="px-6 py-4">
                                20
                            </td>
                            <td class="px-6 py-4">
                                12
                            </td>
                            <td class=" pe-4 py-4">
                                <div className="flex items-center gap-3">
                                    <div class="w-full bg-[#42d9a223] rounded-full h-2.5">
                                        <div class="bg-[#42D9A2] h-2.5 rounded-full" style={{ width: "90%" }}></div>
                                    </div>

                                    <p>90%</p>
                                </div>
                            </td>
                            <td class=" ">
                                <a href="#" class="font-medium text-[#73BDBD]  bg-white  border border-[#73BDBD] px-8 py-2 rounded-lg">Edit</a>
                            </td>
                        </tr>
                        <tr class="border-b border-t text-[#667085] bg-white">
                            <th scope="row" class="px-6 py-4 font-medium font-mattone text-[#101828]">
                                Microsoft Surface Pro
                            </th>
                            <td class="px-6 py-4">
                                20
                            </td>
                            <td class="px-6 py-4">
                                12
                            </td>
                            <td class="px-6 py-4">
                                12
                            </td>
                            <td class="pe-6 py-4">
                            <div className="flex items-center gap-3">
                                    <div class="w-full bg-[#fc494334] rounded-full h-2.5">
                                        <div class="bg-[#FC4943] h-2.5 rounded-full" style={{ width: "20%" }}></div>
                                    </div>

                                    <p>20%</p>
                                </div>
                            </td>
                            <td class=" ">
                                <a href="#" class="font-medium text-[#73BDBD]  bg-white  border border-[#73BDBD] px-8 py-2 rounded-lg">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-[#F9FAFB] border-b border-t text-[#667085]">
                            <th scope="row" class="px-6 py-4 font-medium font-mattone text-[#101828]">
                                Energy Performance
                            </th>
                            <td class="px-6 py-4">
                                21
                            </td>
                            <td class="px-6 py-4">
                                16
                            </td>
                            <td class="px-6 py-4">
                                22
                            </td>
                            <td class="pe-6 py-4">
                            <div className="flex items-center gap-3">
                                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                                    <div class="bg-[#FFBB29] h-2.5 rounded-full" style={{ width: "30%" }}></div>

                                    </div>

                                    <p>30%</p>
                                </div>
                            </td>
                            <td class=" ">
                                <a href="#" class="font-medium text-[#73BDBD]  bg-white  border border-[#73BDBD] px-8 py-2 rounded-lg">Edit</a>
                            </td>

                        </tr>
                        <tr class="bg-white border-b border-t text-[#667085]">
                            <th scope="row" class="px-6 py-4 font-medium font-mattone text-[#101828]">
                                Google Pixel Phone
                            </th>
                            <td class="px-6 py-4">
                                34
                            </td>
                            <td class="px-6 py-4">
                                21
                            </td>
                            <td class="px-6 py-4">
                                54
                            </td>

                            <td class="pe-6 py-4">
                            <div className="flex items-center gap-3">
                                    <div class="w-full bg-gray-200 rounded-full h-2.5">
                                        <div class="bg-[#42D9A2] h-2.5 rounded-full" style={{ width: "90%" }}></div>
                                    </div>

                                    <p>90%</p>
                                </div>
                            </td>
                            <td class=" ">
                                <a href="#" class="font-medium text-[#73BDBD]  bg-white  border border-[#73BDBD] px-8 py-2 rounded-lg">Edit</a>
                            </td>
                        </tr>
                        <tr class="bg-[#F9FAFB] border-b border-t text-[#667085]">
                            <th scope="row" class="px-6 py-4 font-medium font-mattone text-[#101828]">
                                Apple Watch 5
                            </th>
                            <td class="px-6 py-4">
                                21
                            </td>
                            <td class="px-6 py-4">
                                22
                            </td>
                            <td class="px-6 py-4">
                                32
                            </td>
                            <td class="pe-6 py-4">
                            <div className="flex items-center gap-3">
                                    <div class="w-full bg-[#ffbb294b] rounded-full h-2.5">
                                        <div class="bg-[#FFBB29] h-2.5 rounded-full" style={{ width: "50%" }}></div>
                                    </div>

                                    <p>50%</p>
                                </div>
                            </td>
                            <td class=" ">
                                <a href="#" class="font-medium text-[#73BDBD]  bg-white  border border-[#73BDBD] px-8 py-2 rounded-lg">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
