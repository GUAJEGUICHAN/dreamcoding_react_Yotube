import React, { useEffect, useState } from 'react'
import VideoList from './components/video_list';
import Nav from './components/nav';
import styles from './app.module.css'

function App(props) {

  const [ videos, setVideos] = useState([]);   

  const search = query =>{
    props.Youtube.search(query).then(videos => setVideos(videos))
  }
  useEffect(()=>{
    // console.log( typeof props.Youtube.mostPopular())
    // console.log(  props.Youtube.mostPopular())
    // console.log( typeof props.Youtube.mostPopular()[1])
    // console.log(  props.Youtube.mostPopular()[1])
    props.Youtube.mostPopular().then( videos => setVideos(videos))//객체 안에있는 배열 값들을 
    // setVideos(props.Youtube.mostPopular())
  },[])

  return (
    <div className={styles.app}>
      <Nav onSearch={search}/>
      <VideoList videos = {videos} />
    </div>
    
  );
}

export default App;
