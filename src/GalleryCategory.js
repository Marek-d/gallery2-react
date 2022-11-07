import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const GalleryCategory = ({ oneGallery, countPhotos, onClick, handleGalleryPath }) => {
    const navigate = useNavigate()
    const handleRoute = useCallback(() => navigate('/gallery', {replace:true}), [navigate])

    const API_URL = "http://api.programator.sk/images/0x0";

    return (
        <div onClick={() => { 
            onClick();
            handleRoute(); 
            handleGalleryPath(oneGallery.path);
            }} > 
            
            <span className="count-photos">{countPhotos} fotiek</span>
            <div className="img">
                <img src={oneGallery.image ? API_URL + "/" + oneGallery.image.fullpath : "https://via.placeholder.com/150"} />
            </div>
            <p>{oneGallery.name}</p>
        </div>
    );
}

export default GalleryCategory;