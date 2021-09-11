import React from 'react';
import styles from './video_detail.module.css'
const VideoDetail = (props) => {
    return (
    <section className={styles.detail}>
        <iframe 
            className={styles.video}
            type="text/html" 
            width = "100%"
            height="500px"
            src={`https://www.youtube.com/embed/${props.video.id}`}
            frameborder="0" 
            allowfullscreen>
        </iframe>
        <h1>{props.video.snippet.title}</h1>
        <h1>{props.video.snippet.channelTitle}</h1>
        <pre className={styles.description}>{props.video.snippet.description}</pre>
    </section>
    );
}
    
export default VideoDetail;