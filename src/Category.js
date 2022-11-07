import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { generateEmptyDivs } from "./Utils";

const Category = (props) => {
    const navigate = useNavigate()
    const handleRouteHome = useCallback(() => navigate('', {replace:true}), [navigate])
    const handleRouteAdd = useCallback(() => navigate('/add_images', {replace:true}), [navigate])
    const handleRouteImage = useCallback(() => navigate('/image', {replace:true}), [navigate])

    const API_URL = "http://api.programator.sk/images/0x0";

    const [galleryImages, setGalleryImages] = useState([]);

    const getGalleryImages = async () => {
        const response = await fetch("http://api.programator.sk/gallery/" + props.galleryPath);
        const data = await response.json();

        setGalleryImages(data.images);
    }

    useEffect(() => {
        getGalleryImages();
    }, []);

    const FILL_DIV_COUNT = galleryImages ? 4 - ((galleryImages?.length + 1) % 4) : 3;

    props.galleryImageArray(galleryImages);
    return (
        <div className="gallery">
        <h2>Fotogaléria</h2>
        <h5>
            <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="arrow-left"
            onClick={() => {props.handleClick(); handleRouteHome()}} >
                <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg> {props.galleryPath}
        </h5>
        <div className="gallery-categories">
            {   
                galleryImages?.length > 0
                ? (
                    galleryImages.map((galleryImage) => (
                        <div onClick={() => { 
                            props.handleViewImage(); 
                            handleRouteImage();
                            props.imagePath(galleryImage.fullpath)}} > 
                            <div className="gallery-image">
                                <img src={API_URL + "/" + galleryImage.fullpath} />
                            </div>
                        </div>
                    ))
                ) : (
                    null
                )
            }
            <div className="add-category" onClick={() => { props.handleAddImage(); handleRouteAdd()}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"/></svg>
                <p>Pridať fotky</p>
            </div>
            { generateEmptyDivs(FILL_DIV_COUNT) }
        </div>
    </div>
    );
}

export default Category;