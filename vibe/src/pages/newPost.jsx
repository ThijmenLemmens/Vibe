import {useEffect, useState} from "react";
import Head from "next/head";
import Header from "@/components/header/Header";

const NewPost = (props) => {

    useEffect(() => {

    }, []);

    const [fileName, setFileName] = useState("");

    const handleFileUpload = (event) => {
        const fileInput = event.target;
        if (fileInput.files.length > 0) {
            setFileName(fileInput.files[0].name);
        } else {
            setFileName("");
        }
    };

    const svgClassName = fileName ? "w-6 h-6 mr-1" : "w-6 h-6";

    return (
        <main className="bg-gray-200 overflow-auto h-screen">
            <Header />
            <div className="container mx-auto flex items-center justify-center">
                <form action="" className="w-full mx-40 mt-10 shadow-xl bg-gray-50 rounded-md grid grid-cols-1">
                    <input type="text" name="" id="" placeholder="Title...." className="border-1 ring-1 ring-gray-200 mx-5 my-5 rounded p-2 focus:ring-gray-400 focus:outline-0" required/>
                    <div className="mx-5 mb-4 border border-gray-200 rounded-lg bg-gray-50">
                        <label htmlFor="comment" className="sr-only">Your comment</label>
                        <textarea id="comment" rows="5"
                                  className="w-full rounded-md ring-1 ring-gray-200 text-sm text-gray-900 bg-white border-0 p-2 focus:ring-gray-400 focus:outline-0"
                                  placeholder="Write a comment..."></textarea>
                        <div className="flex items-center justify-between px-3 py-2">
                            <button type="submit"
                                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800">
                                Post comment
                            </button>
                            <div className="flex pl-0 space-x-1 sm:pl-2">
                                <label htmlFor="file-upload" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100">
                                    <div className="flex items-center">
                                        <svg
                                            aria-hidden="true"
                                            className={svgClassName}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        <span className="sr-only">Upload image</span>
                                    </div>
                                    <div>{fileName}</div>
                                    <input
                                        type="file"
                                        id="file-upload"
                                        style={{ display: "none" }}
                                        onChange={handleFileUpload}
                                    />
                                </label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default NewPost;