import {useEffect, useState} from "react";
import {NewPost} from "@/components/feed/newPost";
import {Post} from "@/components/feed/post";
import { collection, getDocs } from "firebase/firestore";
import {db, storage} from '@/config/firebase';
import {getFirestore, doc, updateDoc} from "firebase/firestore";


export const Feed = (props) => {

    const [posts, setPosts] = useState([]);

    const fetchPost = async () => {

        await getDocs(collection(db, "posts"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data()}));
                setPosts(newData);
                console.log(newData);


            })
    }
    useEffect(() => {
        fetchPost();
        console.log(new Date(1685956930*1000))
    }, []);

    return (
        <div className="feed h-full flex-col flex gap-y-3">
            <NewPost />
            {
                posts.map((post, index) => {
                    console.log(post.Downvotes);
                    return (
                        <Post
                            mediaUUID={post.mediaUUID}
                            title={post.title}
                            date={post.Date}
                            content={post.Content}
                            uuid={post.AccountUUID}
                            upvotes={post.Upvotes}
                            downvotes={post.Downvotes}
                            key={index}
                        />
                    )
                })
            }
        </div>
    );
}