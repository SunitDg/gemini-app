import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./Welcome";

function PostList() {
    const { postList, addPost } = useContext(PostListData)
    const handleGetPostsClick = () => {
        // Could be GET or POST/PUT/PATCH/DELETE
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then((res) => {
                console.log(res)
                res.posts.forEach((post) => addPost(post))
            });

        /* { status: 'ok', method: 'GET' } */
    }
    return <>
        {postList.length === 0 && (
            <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
        )}
        {postList.map((post) =>
            <Post key={post.id} post={post}></Post>)}
    </>
}

export default PostList;