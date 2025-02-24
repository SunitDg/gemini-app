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
import { Outlet } from 'react-router-dom';
import DisplayCounter from './components/DisplayCounter';
import Controls from './components/Controls';
import { Provider } from 'react-redux';
import countStore from './store';


function App() {
  const [tab, setSelectedTab] = useState('Home');

// Suggested code may be subject to a license. Learn more: ~LicenseLog:255110435.
  return <Provider store={countStore}>
    <div className="app-container">
      <div className="px-4 py-5 my-5 text-center">
        <img className="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="7" height="57" />
        <Header />
        <DisplayCounter />
        <Controls/>
      </div>
    </div>

  </Provider>
}

export default App
