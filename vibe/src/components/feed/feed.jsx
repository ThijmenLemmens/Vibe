import {useEffect, useState} from "react";
import {NewPost} from "@/components/feed/newPost";
import {Post} from "@/components/feed/post";
import { collection, getDocs } from "firebase/firestore";
import {db, storage} from '@/config/firebase';

export const Feed = (props) => {

    const [posts, setPosts] = useState([]);


    const fetchPost = async () => {

        await getDocs(collection(db, "posts"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc) => ({...doc.data()}));
                setPosts(newData);
                console.log(posts, newData);
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
                    return (
                        <Post
                            key={index}
                            title={post.title}
                            content={post.Content}
                            date={post.Date}
                            uuid={post.AccountUUID}
                            mediaUUID={post.mediaUUID}
                            upvotes={post.upvotes}
                            downvotes={post.downvotes}
                        />
                    )
                })
            }
            <Post />
        </div>
    );
}