import './UploadModal.css'

const UploadModal = ({setShowModal, changeHandler, handelUpload}) => {
    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <span className="close" onClick={()=>setShowModal(false)}>&times;</span>
                        <h2>Upload File</h2>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="uploading-file">File Name</label>
                            <input type="file" name="" id="uploading-file" onChange={changeHandler}/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={handelUpload}>Upload</button>
                        <button className="btn btn-danger" onClick={()=>setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadModal;