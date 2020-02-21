import React, {useState, useEffect} from 'react'

function KegCounter() {
    const [count, setCount] = useState(124)
    const [color, setColor] = useState("green")

    // const levelChange = () => {
    //    if (count <= 124 && count >=63) {
    //        return setColor("green") 
    //     } else if(count <= 62 && count >= 32) {
    //         return setColor("yellow")
    //    } else {
    //        return setColor("red")
    //    }
    // }

    const textColor = {
        color: color
    }
    return(
        <div>
            <p style={textColor}>{count}</p>
            <button onClick={() => setCount(count - 1)}>Buy a Pint</button>
        </div>
    )
}

export default KegCounter