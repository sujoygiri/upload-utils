import { saveAs } from 'file-saver';

const ImageContainer = ({ image_name, image, image_file }) => {

    const imageDownload = (e) => {
        e.preventDefault();
        var download_name = image_file.split('/').pop();
        saveAs(`http://127.0.0.1:8000${image_file}`, download_name);
    }

    return (
        <>
            <div className="image-container">
                <div className="thumbnail">
                    <img src={`http://127.0.0.1:8000${image}`} alt={image_name} height={200} width={200} />
                </div>
                <div className="image-name">
                    <span>{image_name}</span>
                </div>
                <button className="download-button" type="submit" onClick={imageDownload}>Download</button>
                
            </div>
        </>
    )
}

export default ImageContainer;