import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Gallery from "./Gallery";
import AddCategory from "./AddCategory";
import Category from "./Category";
import AddImage from "./AddImage";
import Image from "./Image";

const App = () => {
    const [state, setState] = useState("gallery");
    // console.log("APP.js " + state);
    
    const [galleryPath, setGalleryPath] = useState("");
    // console.log(galleryPath);

    const [imagePath, setImagePath] = useState("");

    const [galleryImageArray, setGalleryImageArray] = useState([]);
    // console.log("APP: " + galleryImageArray);

    return (
        <>
            { state === "gallery" && <Gallery 
                handleClick={() => setState("addGallery")} 
                handleCategory={() => setState("category")}
                handleGalleryPath={(path) => setGalleryPath(path)}
                /> }
            { state === "category" && <Category 
                handleClick={() => setState("gallery")} 
                handleAddImage={() => setState("addImage")}
                handleViewImage={() => setState("image")}
                galleryPath={galleryPath}
                imagePath={(imagePath) => setImagePath(imagePath)}
                galleryImageArray={(galleryImages) => setGalleryImageArray(galleryImages)}
                /> }
            { state === "addGallery" && <AddCategory 
                handleClick={() => setState("gallery")} /> }
            { state === "addImage" && <AddImage
                handleClick={() => setState("gallery")}
                handleCategory={() => setState("category")}
                galleryPath={galleryPath} /> }
            { state === "image" && <Image 
            handleClick={() => setState("category")} 
            imagePath={imagePath}
            galleryImages={galleryImageArray} />}
        </>
    );
}

export default App;