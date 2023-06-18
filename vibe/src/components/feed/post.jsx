import {useEffect, useState} from "react";
import img from "@/assets/images/tempImage.png";
import Image from "next/image";
import {Comment} from "@/components/feed/comment";
import {NewComment} from "@/components/feed/newComment";
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "@/config/firebase";
export const Post = (props) => {

    let [hoverArrowUp, setHoverArrowUp] = useState(false)
    let [hoverArrowDown, setHoverArrowDown] = useState(false)
    let [image, setImage] = useState("");

    const fetchImage = async () => {
        const storageRef = ref(storage, 'postImages/Screenshot 2023-06-11 215727.png');
        const url = await getDownloadURL(storageRef);
        setImage(url);
        console.log(url)
    }

    useEffect(() => {
        fetchImage();
    }, []);

    return (
        <div className="w-full bg-white rounded-lg ps-2 py-2">
            <div className="flex">
                <div className="flex h-full flex-col justify-center items-center">
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
                    <div className="w-fit cursor-pointer" onMouseEnter={()=> setHoverArrowDown(true)} onMouseLeave={()=> setHoverArrowDown(false)}>
                        {hoverArrowDown ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                                 className="bi bi-arrow-down-circle" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
                            </svg>
                        )}
                    </div>
                </div>
                <div className="flex ps-3 flex-col w-full">
                    <div className="flex items-center">
                        <Image src={img} alt="" height={40}  className="rounded-full mr-2"/>
                        <p className="font-bold mr-1">Username</p>
                        <p className="text-xs">1 hour ago</p>
                    </div>
                    <h3 className="text-3xl flex flex-wrap mb-2">Title</h3>
                    <Image
                        src={image}
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full h-auto"
                        alt="Post Image"
                    />
                    <div className="flex">
                        <div className="flex cursor-pointer hover:bg-gray-100 py-2 px-1 rounded mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                                 className="bi bi-chat-dots" viewBox="0 0 16 16">
                                <path
                                    d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                <path
                                    d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
                            </svg>
                            <p className="ml-1">200</p>
                            <p className="ml-1 text-s">comments</p>
                        </div>
                        <div className="flex cursor-pointer hover:bg-gray-100 py-2 px-2 rounded mt-1 ml-3 items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                 className="bi bi-share" viewBox="0 0 16 16">
                                <path
                                    d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/>
                            </svg>
                            <p className="ml-1">share</p>
                        </div>
                    </div>
                </div>
            </div>
            {/*comment section*/}
            {/*<NewComment/>*/}
            {/*<div className="w-full flex flex-col gap-2">*/}
            {/*    <Comment/>*/}
            {/*    <Comment/>*/}
            {/*</div>*/}
        </div>
    );
}