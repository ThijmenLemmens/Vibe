import {useEffect} from "react";
import img from "../../public/assets/img/tempImage.png";
import Image from "next/image";

const Comment = (props) => {

    useEffect(() => {

    }, []);

    return (
        <div className="w-full h-auto border-amber-600 pl-3">
            <div className="flex">
                <div className="h-full">
                    <Image src={img} alt="" width={50} height={50} />
                </div>
                <div className="flex pl-3 flex-col pt-1">
                    <div className="flex">
                        <p className="font-bold mr-1">Username</p>
                        <p className="text-xs mt-1">1 hour ago</p>
                    </div>
                    <p>fuck this post</p>
                </div>
            </div>
        </div>
    );
}

export default Comment;