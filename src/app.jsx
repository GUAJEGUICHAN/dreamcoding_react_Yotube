import react from 'react';
import React, { useEffect, useState } from 'react'
import './app.css';
import VideoList from './components/video_list';
import Nav from './components/nav';
function App() {

  const [ videos, setVideos] = useState([]);
  useEffect(()=>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC42CAmiPOT9way8qwzgsfFC0PTcA6BzM0", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  },[])
  return (
    <react.Fragment>
      <Nav/>
      <VideoList videos = {videos} />
    </react.Fragment>
    
  );
}

export default App;
