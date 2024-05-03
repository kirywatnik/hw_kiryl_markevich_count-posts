import { useState } from "react";

export default function Count() {
    const [count, setCount] = useState(0);
    
    const handlerClick = (numb:number) => {
        setCount(count+numb);
    }
    const clear = () => {
        setCount(count-count);
    }
    return(
        <>
            <p>{count}</p>
            <button onClick={() => {handlerClick(-100)}}>-100</button>
            <button onClick={() => {handlerClick(-10)}}>-10</button>
            <button onClick={() => {handlerClick(10)}}>+10</button>
            <button onClick={() => {handlerClick(100)}}>+100</button>
            <button onClick={clear}>Clear</button>

        </>
    )
}