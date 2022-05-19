import { useEffect, useState } from 'react';
import AudioContainer from '../Components/AudioContainer';
import ImageContainer from '../Components/ImageContainer';
import OthersContainer from '../Components/OthersContainer';
import VideoContainer from '../Components/VideoContainer';
import './Home.css'

const Home = () => {

  const [files, setFiles] = useState([]);
  const [fileCategory, setFileCategory] = useState('');

  function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
  }

  function isImage(filename) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case 'jpg':
      case 'gif':
      case 'bmp':
      case 'png':
        return true;
      default:
      //etc
    }
    return false;
  }

  function isVideo(filename) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case 'm4v':
      case 'avi':
      case 'mpg':
      case 'mp4':
        return true;
      default:
    }
    return false;
  }

  function isAudio(filename) {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case 'mp3':
      case 'wav':
        return true;
      default:
    }
    return false;
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

  const getValue = (e) => {
    setFileCategory(e.target.value);
  }

  useEffect(() => {
    fetchAllFiles();
  }, [fileCategory])

  return (
    <>
      <div className="home">
        <div className="dropdown-menu">
          <select name="file" id="file-category" onChange={getValue}>
            <option value="video">Video</option>
            <option value="audio">Audio</option>
            <option value="image">Image</option>
            <option value="pdf">Pdf</option>
          </select>
        </div>
        <div className="main-content">
          <div className="all-files">
            {files.map((file, index) => {
              if (fileCategory === 'image' && isImage(file.file)) {
                return (
                  <ImageContainer image_name={file.name} image={file.image} image_file={file.file} key={index} />
                )
              }
              else if(fileCategory === 'video' && isVideo(file.file)) {
                return (
                  <VideoContainer />
                )
              }
              else if(fileCategory === 'audio' && isAudio(file.file)) {
                return (
                  <AudioContainer />
                )
              }
              else if(fileCategory === 'pdf' && file.file.includes('.pdf')) {
                return (
                  <OthersContainer />
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