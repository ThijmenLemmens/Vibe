import {useEffect, useState} from "react";
import {NewPost} from "@/components/feed/newPost";
import {Post} from "@/components/feed/post";
import { collection, getDocs } from "firebase/firestore";
import {db, storage} from '../../config/firebase';
import {ref, listAll, getDownloadURL} from "firebase/storage";

export const Feed = (props) => {

    const [posts, setPosts] = useState([]);
    const [image, setImage] = useState("");


    const fetchPost = async () => {

        await getDocs(collection(db, "posts"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data()}));
                setPosts(newData);
                console.log(posts, newData);
            })
    }
    const fetchImage = async () => {
        const storageRef = ref(storage, 'postImages/Screenshot 2023-06-11 215727.png');
        const url = await getDownloadURL(storageRef);
        setImage(url);
        console.log(url)
    }

    useEffect(() => {
        fetchPost();
        fetchImage();
        console.log(new Date(1685956930*1000))
    }, []);

    return (
        <div className="feed h-full flex-col flex gap-y-3">
            <NewPost />
            <Post />
        </div>
    );
}