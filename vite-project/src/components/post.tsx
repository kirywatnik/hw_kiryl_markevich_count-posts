import { useState } from "react";

export default function Post() {
    const [count, setCount] = useState(0);
    const like = () => {
        setCount(count+1);
    }
    return (
        <>
            <div>
                <span style={{display:'inline-block', marginRight:'50px'}}>Lorem ipsum dolor sit amet.</span>
                <button onClick={like}>Like</button>
                <span>{count}</span>
            </div>
        </>
    )
}