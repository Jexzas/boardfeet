import { useState } from "react";

function Naming (props) {
    let [name, setName] = useState();
    function handleChange(event) {
        setName(event.target.value);
    }

    return (
        <div className="container">
            <h2>What do you want to call this particular board?</h2>
            <input onChange={handleChange} placeholder="Board Name?"></input>
        </div>
    )
}

export default Naming;