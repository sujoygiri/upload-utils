import { useEffect, useState } from 'react';
import FilesContainer from '../Components/FilesContainer';
import './Home.css'

const Home = () => {

  const [files, setFiles] = useState([]);
  const [innerText, setInnerText] = useState('Video');
  const [className, setClassName] = useState('highlight');

  function getExtension(filename) {
    const parts = filename.split('.');
    return parts[parts.length - 1];
  }

  function isVideo(filename) {
    const ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case 'm4v':
      case 'avi':
      case 'mpg':
      case 'mp4':
        return true;
      default: return false
    }
    
  }

  function isImage(filename) {
    const ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case 'jpg':
      case 'gif':
      case 'bmp':
      case 'png':
        return true;
      default: return false;
      //etc
    }
    
  }

  function isAudio(filename) {
    const ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case 'mp3':
      case 'wav':
        return true;
      default: return false;
    }
    
  }

  const fetchAllFiles = async () => {
    const url = "http://127.0.0.1:8000/api/files/fetch"
    let response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    let data = await response.json();
    if (response.status === 200) {
      setFiles(data);
    }
    console.log(data);
  }

  const highlightDiv = (e) => {
    let value = e.currentTarget.innerText;
    if (value === 'Video') {
      setInnerText('Video');
      setClassName('highlight')
    }
    else if (value === 'Audio') {
      setInnerText('Audio');
      setClassName('highlight')
    }
    else if (value === 'Image') {
      setInnerText('Image');
      setClassName('highlight')
    }
    else if (value === 'Other') {
      setInnerText('Other');
      setClassName('highlight')
    }
  }

  useEffect(() => {
    fetchAllFiles();
  }, [innerText])

  return (
    <>
      <div className="home">
        <div className="main-menu">
          <div className={`menu-item ${innerText === 'Video' && className}`} onClick={highlightDiv}>
            <img src={require('../Assets/video-play-button.png')} alt="video-play-button" height={25} width={25} />
            <p>Video</p>
          </div>
          <div className={`menu-item ${innerText === 'Audio' && className}`} onClick={highlightDiv}>
            <img src={require('../Assets/music.png')} alt="music-logo" height={25} width={25} />
            <p>Audio</p>
          </div>
          <div className={`menu-item ${innerText === 'Image' && className}`} onClick={highlightDiv}>
            <img src={require('../Assets/image.png')} alt="image-play-button" height={25} width={25} />
            <p>Image</p>
          </div>
          <div className={`menu-item ${innerText === 'Other' && className}`} onClick={highlightDiv}>
            <img src={require('../Assets/neon.png')} alt="logo-neon" height={25} width={25} />
            <p>Other</p>
          </div>
        </div>
        <div className="main-content">
          <div className="all-files">
            {files.map((file, index) => {
              if(innerText === 'Other' && !isVideo(file.file) && !isImage(file.file) && !isAudio(file.file)) {
                return (
                  <FilesContainer file_path={file.file} file_type='other' key={index} />
                )
              }
              else if (isVideo(file.file) && innerText === 'Video') {
                return (
                  <FilesContainer file_path={file.file} file_type='video' key={index} />
                )
              }
              else if (isAudio(file.file) && innerText === 'Audio') {
                return (
                  <FilesContainer file_path={file.file} file_type='audio' key={index} />
                )
              }
              else if (isImage(file.file) && innerText === 'Image') {
                return (
                  <FilesContainer file_path={file.file} file_type='image' key={index} />
                )
              }
            })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;