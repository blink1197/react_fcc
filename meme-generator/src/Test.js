import { useState } from "react";


export default function Test () {
    const [thingsArray, setThingsArray] = useState(["Thing 1"])
    const addItem = () => {
        setThingsArray(prevState => [...prevState, `Thing ${prevState.length + 1}`])
        console.log(thingsArray)
    }
    const thingItems = thingsArray.map (item => {
        return <li key={thingsArray.indexOf(item)}>{item}</li>
    })
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingItems}
        </div>
    )
}