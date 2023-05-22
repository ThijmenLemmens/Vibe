import {useEffect, useState} from "react";
import Image from "next/image";
import img from "@/assets/images/tempImage.png";
import Link from "next/link";
import {useRouter} from "next/router";

export const NewPost = (props) => {
    const router = useRouter()
    useEffect(() => {

    }, []);

    return (
        <div className="flex border-amber-950 bg-white rounded-lg p-2">
            <Image src={img} alt="" width={50} height={50} className="rounded-full"/>
            <input onClick={() => router.push("/newPost")} type="search" className="ml-3 rounded-xl w-full px-4 bg-gray-100 hover:border-gray-700 border-transparent border-2 cursor-pointer" placeholder="Create Post"/>
        </div>
    );
}