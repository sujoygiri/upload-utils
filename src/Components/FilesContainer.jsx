import './FilesContainer.css';

const FilesContainer = ({ file_path, file_type }) => {
    let file_name = file_path.split('/').pop();

    return (
        <>
            <div className="all-files">
                <div className="files">
                    <div className="file-icon">
                        {
                            (file_type === 'video' && <img src={require('../Assets/video-icon.png')} alt="video-icon" height={30} width={30} />) ||
                            (file_type === 'audio' && <img src={require('../Assets/audio-icon.png')} alt="audio-icon" height={30} width={30} />) ||
                            (file_type === 'image' && <img src={require('../Assets/image-icon.png')} alt="file-icon" height={30} width={30} />) ||
                            (file_type === 'other' && <img src={require('../Assets/other-icon.png')} alt="other-icon" height={30} width={30} />)
                        }
                    </div>
                    <div className="file-name">
                        {file_name}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilesContainer;

// const imageDownload = (e) => {
//     e.preventDefault();
//     var download_name = image_file.split('/').pop();
//     saveAs(`http://127.0.0.1:8000${image_file}`, download_name);
// }