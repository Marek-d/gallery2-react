import './css/style.css';

import GalleryCategory from "./GalleryCategory";
import { React, useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateEmptyDivs } from './Utils';


const Gallery = (props) => {
    const navigate = useNavigate()
    const handleRoute = useCallback(() => navigate('/add_category', { replace: true }), [navigate])

    const [galleries, setGalleries] = useState([]);

    const getGalleries = async () => {
        const response = await fetch("http://api.programator.sk/gallery");
        const data = await response.json();

        setGalleries(data.galleries);
    }

    useEffect(() => {
        getGalleries();
    }, []);

    const FILL_DIV_COUNT = 4 - ((galleries?.length + 1) % 4);

    return (
        <div className="gallery">
            <h2>Fotogaléria</h2>
            <h5>Kategórie</h5>
            <div className="gallery-categories">
            {
                galleries?.length > 0
                    ? (
                        galleries.map((gallery) => (
                            <GalleryCategory
                            oneGallery={gallery}
                            countPhotos={10}
                            onClick={props.handleCategory}
                            handleGalleryPath={props.handleGalleryPath}
                            />
                        ))
                        
                     ) : (
                        <div>
                            
                        </div>
                    )
            }
                <div className="add-category" onClick={() => { props.handleClick(); handleRoute() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z" /></svg>
                    <p>Pridať kategóriu</p>
                </div>
                { generateEmptyDivs(FILL_DIV_COUNT) }
            </div>
        </div>
    );
}

export default Gallery;
