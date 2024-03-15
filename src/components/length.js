import { useState } from "react";

function Length (props) {
    let unit, setUnit = useState('');
    /**
     * Triggers the handle name function with a change event
     * @param {object} event 
     */
    function handleChange(event) {
        if (unit == 'ft') {
            props.handleLength(event.target.value * 12); 
        } else if (unit == 'in') {  
            props.handleLength(event.target.value);
        } else {
            alert('Select a unit');
        }
    }

    function handleUnit(event) {
        setUnit(event.target.value);
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
            <h2>How long is this board?</h2>
            <input className="form-control" onChange={handleChange} placeholder="Board Name?"></input>
            <input type="radio" class="btn-check" onClick={handleUnit} value="ft" name="options" id="feet" autocomplete="off" checked/>
            <label class="btn btn-secondary" for="option1">Feet</label>
            <input type="radio" class="btn-check" onClick={handleUnit} value="in" name="options" id="inch" autocomplete="off"/>
            <label class="btn btn-secondary" for="option2">Inches</label>
            <button className="form-control  btn btn-primary" onClick={handleClick} value="forward">Next -&gt;</button>
        </div>
    )
}

export default Length;