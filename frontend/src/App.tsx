import React, { useState, useEffect } from 'react'
import api from './services/api'

import image from './assets/man.png'

import './Main.css'
import './global.css'

interface Post {
  id: number;
  userId: number;
  name: string;
  company: string;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Array<Post>>([])

  useEffect(() => {
    api.get('posts').then(response => {
      setPosts(response.data)
    })
  }, [])

  return (
    <>
      <div id="app">
        <main>
          <ul>
            {posts.map(post => (
              <li key={post.id} className="post-item">
                <header>
                  <img src={image} alt=""/>
                  <div className="user-info">
                    <strong>{post.name}</strong>
                    <span>{post.company}</span>
                  </div>
                </header>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
