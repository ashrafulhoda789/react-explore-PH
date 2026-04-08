import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();

    const navigate = useNavigate();

    // const handleGoBack = () =>{
    //     navigate('/posts')
    // }

    // console.log(post);
    const { title, body } = post;
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            {/* <button onClick={handleGoBack}>Go Back</button> */}
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;