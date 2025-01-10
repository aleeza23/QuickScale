import React, { useState, useEffect, useRef } from 'react';
import { Content } from '../components/Content';
import { Dashboard } from '../components/Dashboard';
import { EditorPanel } from '../components/EditorPanel';
import { CiSquareCheck } from 'react-icons/ci';
import { IoMdCheckbox } from 'react-icons/io';
import { pdfjs } from 'react-pdf'; // Import pdf.js
import { Document, Page } from 'react-pdf';
import { usePdfFile } from '../hook/usePdfFile';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


export const FileDetails = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [numPages, setNumPages] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [pdfTextFields, setPdfTextFields] = useState([]); // Track editable fields
    const [formData, setFormData] = useState({});
    const canvasRef = useRef(null);


    // Using the custom hook to get the uploaded PDF file
    const { pdfFile } = usePdfFile();

    useEffect(() => {
        if (pdfFile) {
            console.log('PDF file loaded:', pdfFile.name); // Log PDF file to see if it's loaded correctly

        }
    }, [pdfFile, pageNumber]);

    // Function to render PDF page
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    // Function to handle editable fields input change
    const handleInputChange = (index, value) => {
        setFormData(prev => ({ ...prev, [index]: value }));
    };

    const toggleFileSelection = (index) => {
        setSelectedFiles(prev => {
            if (prev.includes(index)) {
                return prev.filter(fileIndex => fileIndex !== index);
            }
            return [...prev, index];
        });
    };

    const toggleSelectAll = () => {
        setSelectedFiles((prev) => prev.length === 3 ? [] : [0, 1, 2]);
    };

    const files = [
        { name: 'Energy Performance Certificate.pdf', index: 0 },
        { name: 'Building Plan.pdf', index: 1 },
        { name: 'Safety Report.pdf', index: 2 },
    ];

    return (
        <Dashboard headerHeading={"Edit file"}>
            <Content>
                <div className="bg-white rounded-lg p-4 my-6">
                    <h1 className="font-mattone mb-2">Document</h1>
                    <div className="grid lg:grid-cols-4 gap-6">
                        <div className="border p-2 rounded-lg">
                            {/* File Selection Section */}
                            <div className="flex p-1 gap-2 lg:gap-4">
                                <button className='flex-shrink-0 rounded bg-[#70D2C2] px-5 py-2 font-poppins text-sm text-white'>+ Add file</button>
                                <div className="relative w-full">
                                    <input type="text" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-lg pr-3 pl-10 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Search here..." />
                                    <button className="absolute left-1 top-1 p-1.5 rounded border border-transparent text-center text-sm text-gray-300 transition-all focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                            <path fill-rule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between mt-6 px-2">
                                <p className="text-[#BEBEBE] font-poppins text-sm">All Files</p>
                                <button className="text-[#66C3B4] font-poppins text-sm inline-flex items-center gap-1" onClick={toggleSelectAll}>
                                    {selectedFiles.length === 3 ? (
                                        <IoMdCheckbox className="size-4 text-[#66C3B4]" />
                                    ) : (
                                        <CiSquareCheck className="size-4" />
                                    )}
                                    <span>{selectedFiles.length === 3 ? 'Deselect All' : 'Select All'}</span>
                                </button>
                            </div>

                            {/* Files list */}
                            <div className="mt-3 flex flex-col gap-4">
                                {files.map((file) => (
                                    <div
                                        key={file.index}
                                        className={`border ${selectedFiles.includes(file.index) ? 'border-[#70D2C2] bg-[#70D2C21A]' : 'border-transparent bg-transparent'} rounded-lg py-1 px-2 flex items-center justify-between`}
                                        onClick={() => toggleFileSelection(file.index)}
                                    >
                                        <div className="inline-flex items-center gap-1">
                                            <p>{file.index + 1}.</p>
                                            <p className="font-poppins text-xs font-medium flex-shrink-0">{file.name}</p>
                                        </div>
                                        {selectedFiles.includes(file.index) && <CiSquareCheck className="size-4 text-[#66C3B4]" />}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* PDF rendering area */}
                        <div className="border p-2 lg:p-6 rounded-lg lg:col-span-2">
                            {pdfFile ? (
                                <div>
                                    <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                                        <Page pageNumber={pageNumber} />
                                    </Document>

                                </div>
                            ) : (
                                <p>No PDF file uploaded.</p>
                            )}
                        </div>

                        <EditorPanel />
                    </div>
                </div>
            </Content>
        </Dashboard>
    );
};
