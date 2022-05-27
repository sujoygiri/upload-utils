
const FilesContainer = ({ file_path, file_type }) => {
    let file_name = file_path.split('/').pop();
    
    return (
        <>
            <div className="files">
                <div className="file-icon">
                    {
                        file_type === 'video' && <img src={require('../Assets/video-icon.png')} alt="" srcset="" height={30} width={30} />
                    }
                </div>
                <div className="file-name">
                    {file_name}
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