import { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

const AddImage = (props) => {
    const navigate = useNavigate()
    const handleRoute = useCallback(() => navigate('/gallery', { replace: true }), [navigate])

    const [dragActive, setDragActive] = useState(false);
    const inputRef = useRef(null);
    const [files, setFiles] = useState([]);
    const [error, setError] = useState("");

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFiles([...e.dataTransfer.files]);
        }
    };

    const handleChange = (e) => {
        e.preventDefault();
        if (e.target.files && e.target.files[0]) {
            setFiles([...e.target.files])
        }
    };

    const onButtonClick = () => {
        inputRef.current.click();
    }

    const handleApi = async () => {
        
        for (const file of files) {
            const formData = new FormData();

            formData.append('image', file);
            formData.append('filename', file.name);
            
            const response = await fetch("http://api.programator.sk/gallery/" + props.galleryPath, {
            method: "POST",
            body: formData
        });

            // const data = await response.json()
            if (response.status === 400) {
                setError("Invalid request - file not found.");
            } else if (response.status === 404) {
                setError("Gallery not found");
            } else {
                props.handleCategory();
            }
        }
    }

    return (
        <div className='add-image-container'>
            <div className="add-image">
                <div className="add-image-heading">
                    <h3>Pridať fotky</h3>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    onClick={() => { props.handleCategory(); handleRoute() }}>
                        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                    </svg>
                </div>

                {files?.length > 0 ? 
                    <ul className='file-list'>
                    {files.map(file => (
                        <li>{file.name}</li>
                        ))}
                    </ul> :

                    <div className="choose-file">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="image-icon"><path d="M152 120c-26.51 0-48 21.49-48 48s21.49 48 48 48s48-21.49 48-48S178.5 120 152 120zM447.1 32h-384C28.65 32-.0091 60.65-.0091 96v320c0 35.35 28.65 64 63.1 64h384c35.35 0 64-28.65 64-64V96C511.1 60.65 483.3 32 447.1 32zM463.1 409.3l-136.8-185.9C323.8 218.8 318.1 216 312 216c-6.113 0-11.82 2.768-15.21 7.379l-106.6 144.1l-37.09-46.1c-3.441-4.279-8.934-6.809-14.77-6.809c-5.842 0-11.33 2.529-14.78 6.809l-75.52 93.81c0-.0293 0 .0293 0 0L47.99 96c0-8.822 7.178-16 16-16h384c8.822 0 16 7.178 16 16V409.3z" /></svg>
                        <form
                            id='form-file-upload'
                            onDragEnter={handleDrag}
                            onSubmit={(e) => e.preventDefault()}>

                            <input
                                ref={inputRef}
                                type="file"
                                id="input-file-upload"
                                multiple={true}
                                onChange={handleChange} />
                            <label
                                id='label-file-upload'
                                htmlFor='input-file-upload'
                                className={dragActive ? "drag-active" : ""} >
                                <div>
                                    <p>Sem presuňte fotky</p>
                                    <p className="or">alebo</p>
                                    <button className='upload-button' onClick={onButtonClick}>Vyberte súbory</button>
                                </div>
                            </label>
                            {dragActive && <div
                                id='drag-file-element'
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            ></div>}
                        </form>
                    </div>
                }
                
                <p>{error}</p>
                <input type="button" value="Pridať" className="add-file-btn" onClick={handleApi}/>
            </div>
        </div>
    )
}



export default AddImage;