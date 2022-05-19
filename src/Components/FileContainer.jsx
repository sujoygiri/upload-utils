import { saveAs } from 'file-saver';

const FileContainer = ({file_name, file_image, main_file}) => {
    
    const imageDownload = (e) => {
        e.preventDefault();
        var download_name = main_file.split('/').pop();
        saveAs(`http://127.0.0.1:8000${main_file}`, download_name);
    }

    return (
        <>
            <div className="file-container">
                <div className="file-thumbnail">
                    <img src={`http://127.0.0.1:8000${file_image}`} alt={file_name} height={200} width={200} />
                </div>
                <div className="file-name">
                    <span>{file_name}</span>
                </div>
                <button className="download-button" type="submit" onClick={imageDownload}>Download</button>
            </div>
        </>
    )
}

export default FileContainer;