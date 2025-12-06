import ReactPlayer from 'react-player'
import "./index.css"

const videoUrl="https://youtu.be/YE7VzlLtp-4"

const VideoPlayer=()=>{
    return(
        <div className="videoplayer-container">
            <ReactPlayer src={videoUrl} controls width="100%" className="video-player" />
            <h1 className="video-title">Big Buck Bunny</h1>
            <p className="videostats">8,100,195 views - May 29, 2008</p>
            <hr className="horizontal-line"/>
        </div>
    )
}

export default VideoPlayer