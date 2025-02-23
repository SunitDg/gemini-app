import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CreatePost, { createPostAction } from './components/CreatePost.jsx'
import PostList from './components/PostList.jsx'
import PostListDetails from './components/PostListDetails.jsx'
import { getPostDetailsFunc } from './store/getPostDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    children: [
      {
        path: '', element: <PostList
        />
      },
      {
        path: 'create-post', element: <CreatePost/>, action: createPostAction
      },
      {
        path: '/post-details/:postId', element: <PostListDetails/>
      }
    ] 
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
    {/* <App /> */}
  </RouterProvider>,
)
