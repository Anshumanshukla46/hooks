import React, { useContext } from 'react'
import { GlobalInfo } from "./Parent"

function CompA() {

    const col = useContext(GlobalInfo)
    console.log(col);

    return (

        <div>
            {/* here we passing data from child to parent */}
            <h1>CompA.js color is {col.color}</h1>


            {/* using this we are passing data from child to parent */}
            <button onClick={() => col.getDay(new Date())}>Get the day</button>
        </div>
    )
}

export default CompA;