import { useEffect } from "react";

function SpecSelector(props) {
    let woods = [];
    useEffect(() => {
        if (props.woods[1]) {
            sortWoods();
        }
    })

    return (
        <div>
            {props.woods.map((item, index) => {
                return (<li key={index}>{item.name} : Rarity {item.rarity}</li>)
            })}
        </div>
    )
}   

export default SpecSelector;