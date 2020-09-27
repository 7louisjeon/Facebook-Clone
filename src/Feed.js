import React, {useEffect, useState} from 'react'
import StoryReel from './StoryReel'
import "./Feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import db from "./firebase"

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) => (
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data()})))
    ));
  }, [])

  return (
    <div className="feed">
      <StoryReel/>
      <MessageSender/>
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
      {/* <Post
        profilePic="https://cdn.vox-cdn.com/thumbor/GzQa3VMNyAITTPQU7ZYMfOjg6lQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19873983/GettyImages_137497593.jpg"
        message="Hello"
        timestamp='This is a timestamp'
        username='Tiger'
        image='https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-1.2.1&w=1000&q=80'
      />
      <Post
        profilePic="https://www.treehugger.com/thmb/OpB2xiTeBwYNlcDG98pQGTT3g0M=/1885x1414/smart/filters:no_upscale()/GettyImages-1094655494-dbe38f4d74d94bfb8de1191a96d1e230.jpg"
        message="Hello"
        timestamp='This is a timestamp'
        username='Turtle'
      />
      <Post
        profilePic="https://singularityhub.com/wp-content/uploads/2018/10/shutterstock_672433252-1068x601.jpg"
        message="Hello"
        timestamp='This is a timestamp'
        username='Parrot'
        image='https://i.pinimg.com/originals/52/bf/34/52bf34b31f8bc657de8b89e3364217c6.jpg'
      /> */}
    </div>
  )
}

export default Feed
