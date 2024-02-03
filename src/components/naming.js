import { useState } from "react";

function Naming (props) {
    /**
     * Triggers the handle name function with a change event
     * @param {object} event 
     */
    function handleChange(event) {
        props.handleName(event.target.value);
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
            <h2>What do you want to call this particular board?</h2>
            <input className="form-control" onChange={handleChange} placeholder="Board Name?"></input>
            <button className="form-control  btn btn-primary" onClick={handleClick} value="forward">Next -&gt;</button>
        </div>
    )
}

export default Naming;