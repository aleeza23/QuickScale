import React, { useState } from "react";
import { Editor } from "@monaco-editor/react";

export const EditorPanel = () => {
    const [editorVisible, setEditorVisible] = useState(false); // State for showing/hiding the editor
    const [activeTab, setActiveTab] = useState("Schema"); // State for active tab
    const [yamlContent, setYamlContent] = useState(`name: "address"\nsemantic_query: "What is the address of the property?"`); // Default YAML content

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const handleYamlChange = (value) => {
        setYamlContent(value); // Update YAML content on edit
    };

    const handleTestNow = () => {
        alert("Testing configuration...");
        // Add test logic here
    };

    const handleSaveConfiguration = () => {
        alert("Configuration saved!");
        // Add save logic here
    };

    const handleAddDataPoint = () => {
        setEditorVisible(true); // Show the editor when "Add Data Point" is clicked
    };

    return (
        <div className="border rounded-lg bg-white ">


            {/* Tabs */}
            <div className="flex lg:p-4  p-1 gap-2 lg:gap-8">
                <button
                    className={`flex-1 text-center rounded-lg font-poppins text-[#B1633D] text-sm py-1 ${activeTab === "Schema" ? "bg-orange-200 " : "bg-gray-100 text-gray-600"
                        }`}
                    onClick={() => handleTabChange("Schema")}
                >
                    Schema
                </button>
                <button
                    className={`flex-1 text-center rounded-lg py-1 border border-[#EAEAEA] ${activeTab === "Validations"
                        ? "bg-orange-200 text-[#B1633D] border-0 "
                        : "bg-white"
                        }`}
                    onClick={() => handleTabChange("Validations")}
                >
                    Validations
                </button>
            </div>
            <hr className="shadow" />

            {/* Data Points Section */}
            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-sm font-poppins font-medium">Data Points</h2>
                    <button
                        className="text-sm text-[#66C3B4] font-poppins "
                        onClick={() => alert("Add Data Point")}
                    >
                        + Add Data Point
                    </button>
                </div>
            </div>
            {!editorVisible ? <div className="flex flex-col items-center justify-center h-80 p-4">
                <svg className="size-16 mb-4" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 441 512.397"><path fill="#262626" fill-rule="nonzero" d="M60.863 0h174.809c3.382 0 6.384 1.619 8.278 4.124l110.107 119.119a10.291 10.291 0 012.745 7.011h.053v119.818a149.269 149.269 0 00-20.752-3.111v-92.213h-43.665v-.041h-.162c-22.045-.349-39.329-6.222-51.694-16.785-12.849-10.978-20.063-26.614-21.503-46.038a10.16 10.16 0 01-.096-1.405V20.752H60.863c-11.02 0-21.049 4.516-28.321 11.79-7.274 7.272-11.79 17.301-11.79 28.321v338.275c0 11.015 4.521 21.038 11.796 28.312 7.278 7.279 17.31 11.801 28.315 11.801h120.749a148.203 148.203 0 008.115 20.752H60.863c-16.73 0-31.958-6.85-42.987-17.881C6.852 431.098 0 415.881 0 399.138V60.863C0 44.114 6.842 28.894 17.87 17.87 28.893 6.842 44.114 0 60.863 0zm41.915 209.516c-5.727 0-10.372-4.645-10.372-10.372s4.645-10.372 10.372-10.372h151.288c5.727 0 10.372 4.645 10.372 10.372s-4.645 10.372-10.372 10.372H102.778zm0 72.681c-5.727 0-10.372-4.645-10.372-10.372s4.645-10.372 10.372-10.372H246.05c2.829 0 5.394 1.134 7.264 2.97a149.465 149.465 0 00-25.875 17.774H102.778zm0 72.688c-5.727 0-10.372-4.645-10.372-10.372s4.645-10.372 10.372-10.372h85.567a148.267 148.267 0 00-7.597 20.744h-77.97zM239.735 29.983v60.433c1.022 13.737 5.819 24.535 14.303 31.783 8.667 7.404 21.487 11.544 38.4 11.835v-.038h43.441L239.735 29.983z" /><path fill="red" d="M324.262 278.924c32.231 0 61.418 13.068 82.544 34.193C427.932 334.241 441 363.428 441 395.659c0 32.235-13.068 61.419-34.194 82.545-21.126 21.125-50.309 34.193-82.544 34.193-32.232 0-61.418-13.068-82.542-34.193-21.126-21.126-34.194-50.313-34.194-82.545 0-32.233 13.068-61.416 34.194-82.542 21.125-21.125 50.309-34.193 82.542-34.193z" /><path fill="#fff" d="M338.404 418.342h-28.375c-1.932-23.434-25.417-86.827 14.234-86.827 39.738 0 16.073 63.462 14.141 86.827zm-28.375 14.14h28.375v25.135h-28.375v-25.135z" /></svg>
                <h2 className="text-center  font-poppins text-black text-xl mb-2">
                    No fields exists
                </h2>
                <button
                    className="border border-[#66C3B4] text-xs text-[#70D2C2] font-poppins py-2 px-4 rounded-lg"
                    onClick={handleAddDataPoint}
                >
                    + Add Data Point
                </button>
            </div> : (<>
                <div className="border mx-4 h-80 rounded overflow-hidden mb-4">
                    <Editor
                        height="100%"
                        language="yaml"
                        value={yamlContent}
                        onChange={handleYamlChange}
                        options={{
                            wordWrap: "on",
                            minimap: { enabled: false },
                            scrollBeyondLastLine: false,
                            wrappingIndent: "same",
                            lineNumbers: "on",
                            lineHeight: 20,
                        }}
                    />
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col gap-2 p-4 mt-auto">
                    <button
                        className="bg-[#70D2C2] font-poppins text-white py-2 px-4 rounded "
                        onClick={handleTestNow}
                    >
                        Test Now
                    </button>
                    <button
                        className="bg-[#0000311A] text-[#00003166] py-2 px-4 rounded "
                        onClick={handleSaveConfiguration}
                    >
                        Save Configuration
                    </button>
                </div>
            </>

            )}


        </div>
    );
};
