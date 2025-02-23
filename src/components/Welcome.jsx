import { useContext } from "react";
import { PostList } from "../store/post-list-store";

function WelcomeMessage({onGetPostsClick}) {
    return <>
    <button className="btn btn-primary" onClick={onGetPostsClick}>Get Initial Post</button>
    </>
}
export default WelcomeMessage;