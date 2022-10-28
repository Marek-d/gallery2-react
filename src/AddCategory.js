import { useCallback } from "react";
import { useNavigate } from "react-router";

const AddCategory = (props) => {
    const navigate = useNavigate()
    const handleRoute = useCallback(() => navigate('', { replace: true }), [navigate])

    return (
        <div className="add-gallery-container">
            <div className="add-gallery">
                <div className="add-gallery-heading">
                    <h3>Pridať kategóriu</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
                        onClick={() => { props.handleClick(); handleRoute(); }} /></svg>
                </div>

                <span>Názov kategórie *</span>
                <input type="text" className="input-text" />
                <input type="button" value="Pridať" />
            </div>
        </div>
    );
}

export default AddCategory;