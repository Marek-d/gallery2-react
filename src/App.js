import React, { useState } from "react";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Gallery from "./Gallery";
import AddCategory from "./AddCategory";
import Category from "./Category";
import AddImage from "./AddImage";
import Image from "./Image";

const App = () => {
    const [state, setState] = useState("gallery");
    console.log("APP.js " + state);
    
    return (
        <>
            { state === "gallery" && <Gallery 
                handleClick={() => setState("addGallery")} 
                handleCategory={() => setState("category")} /> }
            { state === "category" && <Category 
                handleClick={() => setState("gallery")} 
                handleAddImage={() => setState("addImage")}
                handleViewImage={() => setState("image")} /> }
            { state === "addGallery" && <AddCategory 
                handleClick={() => setState("gallery")} /> }
            { state === "addImage" && <AddImage
                handleClick={() => setState("gallery")}
                handleCategory={() => setState("category")} /> }
            { state === "image" && <Image 
            handleClick={() => setState("category")} />}

        </>
    );
}

export default App;