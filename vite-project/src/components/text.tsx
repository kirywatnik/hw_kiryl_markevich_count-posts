import { useState } from "react";
export default function Text() {
    
    const [but, isVisible] = useState(true);
    
        
    
    const showText = () => {
        isVisible(!but);
        
    }
    return (
        <>
      <button onClick={showText}>{but && <span>Close</span>} {!but && <span>Open</span>}</button>
      {but && <p>Hello</p>}
        </>
    )
}