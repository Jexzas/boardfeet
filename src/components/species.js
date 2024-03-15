import { useState } from "react";

function Species (props) {
    /**
     * Triggers the handle name function with a change event
     * @param {object} event 
     */
    function handleChange(event) {
        props.handleSpecies(event.target.value);
    }

    /**
     * Triggers the handle navigate function with a click event
     * @param {object} event 
     */
    function handleClick(event) {
        props.handleNavigate(event.target.value);
    }

    return (
        <div className="container d-flex-inline form-group">
            <h2>Select a species from the picker below:</h2>
            <button className="form-control  btn btn-primary" onClick={handleClick} value="forward">Next -&gt;</button>
        </div>
    )
}

export default Species;