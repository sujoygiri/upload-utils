import './VideoContainer.css';

const VideoContainer = ({ video_file, video_thumbnail }) => {
    console.log(video_file);
    return (
        <>
            <div className="video-container">
                <div className="video-player">
                    <video width={500} controls preload='auto' poster={`http://127.0.0.1:8000${video_thumbnail}`}>
                        <source src={`http://127.0.0.1:8000${video_file}`} />
                    </video>
                    
                </div>
            </div>
        </>
    )
}

export default VideoContainer;