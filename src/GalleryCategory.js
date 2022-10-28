import React, { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

const GalleryCategory = (props) => {
    const navigate = useNavigate()
    const handleRoute = useCallback(() => navigate('/gallery', {replace:true}), [navigate])

    return (
        <div onClick={() => {props.onClick(); handleRoute();}}>
            <span className="count-photos">{props.countPhotos} fotiek</span>
            <div className={`img ${props.classname}`}></div>
            <p>{props.title}</p>
        </div>
    );
}

export default GalleryCategory;