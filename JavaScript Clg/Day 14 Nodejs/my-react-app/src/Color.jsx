import React from 'react'
import { useState } from 'react'
const Color = () => {
    let [color, SetColor] = useState("#262626")
    function fun1() {
        SetColor("aqua")
    }

    return (
        <div style={{ color: 'white',
            backgroundColor: color, height: "100vh" }}>
        <div className="contain">
        <h2>useContext</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, vitae!</p>
        <button onClick={fun1}>Change Light</button>
        </div>
        </div>
    )
}

export default Color