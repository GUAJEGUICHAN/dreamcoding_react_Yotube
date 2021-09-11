import React, { useEffect, useState } from 'react'
import VideoList from './components/video_list';
import Nav from './components/nav';
import styles from './app.module.css'
import VideoDetail from './components/video_detail';

function App(props) {

  const [ videos, setVideos] = useState([]);   
  const [selectedVideo, setSelectedVideo]=useState(null);
  
  const selectVideo = (video)=>{
    setSelectedVideo(video);
    console.log(typeof selectVideo)
    console.log(typeof setSelectedVideo)
  }
  const search = query =>{
    props.Youtube.search(query).then(videos => {setVideos(videos); setSelectedVideo(null);})
  }
  useEffect(()=>{
    // console.log( typeof props.Youtube.mostPopular())
    // console.log(  props.Youtube.mostPopular())
    // console.log( typeof props.Youtube.mostPopular()[1])
    // console.log(  props.Youtube.mostPopular()[1])
    props.Youtube.mostPopular().then(videos => setVideos(videos))//객체 안에있는 배열 값들을 
    // setVideos(props.Youtube.mostPopular())
  },[])

  return (
    <div className={styles.app}>
      <Nav onSearch={search}  />
      <section className={styles.content}>
          {selectedVideo && <div className={styles.detail}>
            <VideoDetail video={selectedVideo}/>
          </div>}
        <div className={styles.list}>
          <VideoList videos = {videos} onVideoClick={selectVideo} display={selectedVideo ? 'list' : 'grid'}/>
        </div>
        
      </section>
      
    </div>
    
  );
}

export default App;
