import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Dashboard } from "../components/Dashboard";
import { Content } from "../components/Content";
import uploadIcon from "../assets/images/file upload 03.svg";
import { EditorPanel } from "../components/EditorPanel";
import { usePdfFile } from "../hook/usePdfFile";

export const Upload = () => {
    const [isExtracting, setIsExtracting] = useState(false); 
    const [progress, setProgress] = useState(0); // Progress percentage
    const navigate = useNavigate(); 
    const {pdfFile, setFile } = usePdfFile(); // Using the custom hook to set the file

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
       
        
        if (file) {
            setFile(file);
        }
    };

    const handleStartExtraction = () => {
        setIsExtracting(true);
        setProgress(0);

        // Simulate extraction progress
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    // Redirect to a new page after extraction is complete
                    setTimeout(() => navigate("/file-details"), 500);
                    return 100;
                }
                return prevProgress + 10;
            });
        }, 500); // Increment progress every 500ms
    };

    console.log(pdfFile);
    

    return (
        <Dashboard headerHeading={"Your Document Model"} isUploadDropdown={true}>
            <Content>
                <div className="bg-white rounded-lg p-4 my-6">
                    <h1 className="font-mattone mb-2">Document</h1>
                    <div>
                        <div className="grid lg:grid-cols-3 gap-6">
                            <div className="border p-2 lg:p-6 lg:col-span-2 rounded-lg">
                                <div className="lg:p-12">
                                    <div className="lg:p-8">
                                        <h1 className="font-mattone text-center text-sm">
                                            Select a representative set of files to start building with.
                                        </h1>
                                        <p className="text-center text-sm text-[#667085] font-poppins">
                                            Five files of each document type is a good start.
                                        </p>
                                        <div className="border border-dashed flex flex-col justify-center items-center border-[#66C3B4] rounded-lg h-72 mt-10">
                                            <img src={uploadIcon} alt="Upload Icon" />
                                            <h2 className="font-mattone mt-6 lg:text-start text-center">Drop anywhere to upload</h2>
                                            <p className="font-poppins text-[#667085] text-sm max-w-sm mx-auto text-center mt-2">
                                                AI Hub supports uploading most file types. For details, see{" "}
                                                <a href="" className="text-[#FC8043]">
                                                    Supported file types.
                                                </a>
                                            </p>
                                            <label
                                                htmlFor="file-upload"
                                                className="rounded bg-[#D7DCFF] px-5 py-2 font-poppins text-sm mt-3 cursor-pointer"
                                            >
                                                Browse files
                                            </label>
                                            <input
                                                id="file-upload"
                                                type="file"
                                                className="hidden"
                                                onChange={handleFileUpload}
                                            />
                                        </div>
                                    </div>
                                    {!isExtracting ? (
                                        <div className="flex justify-center items-center mt-4 lg:mt-0">
                                            <button
                                                className="rounded bg-[#70D2C2] px-5 py-2 font-poppins text-sm text-white"
                                                onClick={handleStartExtraction}
                                            >
                                                Start Extraction
                                            </button>
                                        </div>
                                    ) : (
                                        <div className="mt-2 px-8">
                                            <p className="text-sm font-poppins">Extracting...</p>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                <div
                                                    className="bg-[#70D2C2] h-2.5 rounded-full"
                                                    style={{ width: `${progress}%` }}
                                                ></div>
                                            </div>
                                            <p className="text-center text-sm mt-2">{progress}%</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Editor here - Schema and Validation tabs */}
                            <EditorPanel />
                        </div>
                    </div>
                </div>
            </Content>
        </Dashboard>
    );
};
