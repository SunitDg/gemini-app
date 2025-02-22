import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import Post from './components/Post';
import PostList from './components/PostList';
import PostListProvider from './store/post-list-store';

function App() {
  const [tab, setSelectedTab] = useState('Home');

  return <PostListProvider>
    <div className="app-container">
      <Sidebar selectedTab={tab} onSelectTab={setSelectedTab} />
      <div className="content">
        <Header />
        {tab === 'Home' ? <PostList /> : <CreatePost />}
        <Footer />
      </div>

    </div>

  </PostListProvider>
}

export default App
