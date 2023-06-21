import {useEffect} from "react";

const NewComment = (props) => {

    useEffect(() => {

    }, []);

    return (
        <div className="m-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
            <textarea id="message" rows="3"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 outline-0 focus:border-blue-500"
                      placeholder="Write your thoughts here..." />
            <div className="flex w-full justify-end my-2 border-b border-b-gray-200 pb-2">
                <button className="border border-gray-300 text-sm text-gray-900 bg-gray-50 hover:bg-gray-100 rounded py-1 px-2">post comment</button>
            </div>
        </div>
    );
}

export default NewComment;