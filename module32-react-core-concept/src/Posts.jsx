import { use } from "react"
import Post from "./Post";

export default function Posts({postPromise}){
    // console.log(postPromise);
    const posts = use(postPromise);
    console.log(posts);
    
    
    return(
        <div className="borderedCard">
            <h2>ALl Posts are here: {[posts.length]}</h2>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    )
}