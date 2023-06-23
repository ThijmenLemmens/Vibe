import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from "@/components/header/Header";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytesResumable, uploadBytes } from "firebase/storage";

import useAuth from "@/firebase/checkAuth";


const NewPost = (props) => {

    const auth = useAuth();

    useEffect(() => {

    }, []);

    const [fileName, setFileName] = useState("");
    const [file, setFile] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleMouseEnter2 = () => {
        setIsHovered2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHovered2(false);
    };

    const handleFileUpload = (event) => {
            const fileInput = event.target.files[0];
            setFileName(fileInput.name);
            setFile(fileInput);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        const content = e.target[1].value;
        const date = new Date();
        const timestamp = date.getTime();

        const collectionRef = collection(db, "posts");
        const docRef = await addDoc(collectionRef, {
            AccountUUID: auth.user.displayName,
            Content: content,
            Date: timestamp,
            Downvotes: [],
            title: title,
            Upvotes: [],
            mediaUUID: auth.user.displayName + fileName
        });

        const storageRef = ref(storage, `postImages/${auth.user.displayName}${fileName}`);
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            }
        );

    };


    const svgClassName = fileName ? "w-6 h-6 mr-1" : "w-6 h-6";

    return (
        <main className="margin-newpost bg-gray-200 overflow-auto h-screen">
            <Header />
            <div className="container mx-auto flex items-center justify-center">
                <form action="" className="w-full mx-40 mt-10 shadow-xl bg-gray-50 rounded-md grid grid-cols-1" onSubmit={handleUpload}>
                    <label className="relative">
                        <input type="text" name="" id="" placeholder="Title...." className="border-1 fill-avalible ring-1 ring-gray-200 m-5 rounded p-2 focus:ring-gray-400 focus:outline-0" required/>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            className={`bi ${isHovered ? 'bi-mic-fill' : 'bi-mic'} top-0 right-0 absolute m-7 cursor-pointer`}
                            viewBox="0 0 16 16"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {isHovered ? (
                                <React.Fragment>
                                    <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                    <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                                </React.Fragment>
                            )}
                        </svg>
                    </label>
                    <div className="mx-5 mb-4 border border-gray-200 rounded-lg bg-gray-50">
                        <label className="relative block">
                              <textarea
                                  id="comment"
                                  rows="5"
                                  className="w-full rounded-md ring-1 ring-gray-200 text-sm text-gray-900 bg-white border-0 p-2 pr-10 focus:ring-gray-400 focus:outline-0"
                                  placeholder="Write a comment..."
                              ></textarea>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className={`bi ${isHovered2 ? 'bi-mic-fill' : 'bi-mic'} top-0 right-0 absolute m-2 cursor-pointer`}
                                viewBox="0 0 16 16"
                                onMouseEnter={handleMouseEnter2}
                                onMouseLeave={handleMouseLeave2}
                            >
                                {isHovered2 ? (
                                    <React.Fragment>
                                        <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                                        <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                                    </React.Fragment>
                                )}
                            </svg>
                        </label>
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