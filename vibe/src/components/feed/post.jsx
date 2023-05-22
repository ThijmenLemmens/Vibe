import {useEffect, useState} from "react";

export const Post = (props) => {

    let [hoverArrowUp, setHoverArrowUp] = useState(false)
    let [hoverArrowDown, setHoverArrowDown] = useState(false)

    useEffect(() => {

    }, []);

    return (
        <div className="w-full bg-white rounded-lg p-2">
            <div className="flex">
                <div className="bg-gray-200 flex flex-col justify-center items-center">
                    <div onMouseEnter={() => setHoverArrowUp(true)} onMouseLeave={() => setHoverArrowUp(false)} className="w-fit cursor-pointer">
                        {hoverArrowUp ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                            </svg>
                        )}
                    </div>
                    <p className="content-cente">200</p>

                </div>
            </div>
        </div>
    );
}