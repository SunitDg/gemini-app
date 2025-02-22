import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {

  const { deletePost } = useContext(PostList);
  return <div className="card" style={{ margin: '20px 0' }}>
    <div className="card-body">
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <MdDelete onClick={() => deletePost(post.id)} />
        <span className="visually-hidden">unread messages</span>
      </span>
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body}</p>
      {post.tags.map((tag) => <span key={tag} className="badge text-bg-primary" style={{ margin: '5px' }}>{tag}</span>)}

      {/* <a href="#" className="btn btn-primary">{post.reaction}</a> */}
    </div>
  </div>
}

export default Post;