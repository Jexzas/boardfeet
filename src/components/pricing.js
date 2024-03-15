import { useState } from "react";

function Pricing (props) {
    /**
     * Triggers the handle name function with a change event
     * @param {object} event 
     */
    function handleChange(event) {
        props.handlePrice(event.target.value);
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
            <h2>How much does this board cost per board foot?</h2>
            <input className="form-control" onChange={handleChange} placeholder="Price/bf?"></input>
            <button className="form-control  btn btn-primary" onClick={handleClick} value="forward">Next -&gt;</button>
        </div>
    )
}

export default Pricing;