import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();

    // console.log(post);
    const {title, body} = post;
    return (
        <div>   
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;