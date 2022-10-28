import { useCallback } from "react";
import { useNavigate } from "react-router";

const Image = (props) => {
    const navigate = useNavigate()
    const handleRoute = useCallback(() => navigate('/gallery', {replace:true}), [navigate])
    
    return (
        <div className="image-container">
            <div className="image">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="cross-icon"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" onClick={() => { props.handleClick(); handleRoute() }} /></svg>
                <div className="arrows">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="arrow-left"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="arrow-right"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                </div>
            </div>
        </div>
    )
}

export default Image;