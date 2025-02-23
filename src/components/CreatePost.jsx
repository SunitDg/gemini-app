import { useContext } from "react";
import { useRef } from "react";
import { PostList } from "../store/post-list-store";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const {addPost} = useContext(PostList);
  const userId = useRef();
  const title = useRef();
  const body = useRef();
  const reaction = useRef();
  const tags = useRef();
  const handleSubmit = (event)  => {
    event.preventDefault();
    let post = {
      "userId": userId.current.value,
      "title": title.current.value,
      "body": body.current.value,
      "reaction": reaction.current.value,
      "tags": tags.current.value.split(' '),
    };
    addPost(post);
    navigate('/');
  }
  return <>
    <form onSubmit={handleSubmit} >

    <div className="form-group" style={{margin:'20px 0'}}>
        <label htmlFor="id">User Id</label>
        <input name="userId" type="text" className="form-control" id="id" ref={userId} placeholder="userId" />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input name="title" type="test" className="form-control" id="title" ref={title} aria-describedby="emailHelp" placeholder="Enter title" />
      </div>
      <div className="form-group" style={{margin:'20px 0'}}>
        <label htmlFor="body">Body</label>
        <input name="body" type="text" className="form-control" ref={body} id="body" placeholder="Body" />
      </div>
      <div className="form-group"  style={{margin:'20px 0'}}>
        <label htmlFor="reaction">Reactions</label>
        <input name="reaction" type="text" className="form-control" ref={reaction} id="reaction" placeholder="Number of Reactions" />
      </div>
      <div className="form-group"  style={{margin:'20px 0'}}>
        <label htmlFor="reaction">Tags</label>
        <input name="tags" type="text" className="form-control" ref={tags} id="reaction" placeholder="Enter Tags" />
      </div>
      <button type="submit" className="btn btn-primary">Add Post</button>
    </form>
  </>
}
export const createPostAction = () => {

}
export default CreatePost;