import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AddCategory = (props) => {
    const navigate = useNavigate()
    const handleRoute = useCallback(() => navigate('', { replace: true }), [navigate])

    const [input, setInput] = useState("");
    const [error, setError] = useState("");

    const createCategory = async () => {
        const jsonData = {
            "name": input
        }

        const response = await fetch("http://api.programator.sk/gallery", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(jsonData)
        });
        const data = await response.json();

        if (response.status === 400) {
            setError("Invalid request");
        } else if (response.status === 409) {
            setError("Gallery with this name already exists");
        } else if (response.status === 500) {
            setError("Unknown error");
        } else {
            props.handleClick();
        }
        console.log(response);
    }

    return (
        <div className="add-gallery-container">
            <div className="add-gallery">
                <div className="add-gallery-heading">
                    <h3>Pridať kategóriu</h3>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                    onClick={() => { props.handleClick(); handleRoute(); }}>
                        <path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" />
                    </svg>
                </div>
                <p>{error}</p>
                <span>Názov kategórie *</span>
                <input 
                    type="text" 
                    value={input}
                    className="input-text"
                    onChange={(e) => {setInput(e.target.value)}} />
                <input
                    type="button"
                    value="Pridať"
                    onClick={createCategory} />
            </div>
        </div>
    );
}

export default AddCategory;