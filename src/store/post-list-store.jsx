import { createContext, useReducer } from "react";

export const PostList = createContext({
  initialPostList: [],
  addPost: () => { },
  deletePost: () => { }
});

const PostListProvider = ({ children }) => {
  const addPost = (post) => {
    console.log(post)
    dispatchPostList({type: 'ADD_POST', payload: post});
  }
  
  const deletePost = (index) => {
    dispatchPostList({type: 'DELETE_POST', payload: index});
  }
  let DEFAULT_POST_LIST = [];

  const postListReducer = (currPostList, action) => {
    if(action.type === 'DELETE_POST') {
      return currPostList.filter((post) => post.id !== action.payload);
    }
    if(action.type === 'ADD_POST') {
      return [...currPostList,action.payload];
    }
    return currPostList;
  }

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);


  return <PostList.Provider value={{ postList, addPost, deletePost }}>
    {children}
  </PostList.Provider>
}

export default PostListProvider;