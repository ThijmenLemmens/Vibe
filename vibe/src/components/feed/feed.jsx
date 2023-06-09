import {useEffect} from "react";
import {NewPost} from "@/components/feed/newPost";
import {Post} from "@/components/feed/post";

export const Feed = (props) => {

    useEffect(() => {

    }, []);

    return (
        <div className="feed h-full flex-col flex gap-y-3">
            <NewPost />
            <Post />
        </div>
    );
}