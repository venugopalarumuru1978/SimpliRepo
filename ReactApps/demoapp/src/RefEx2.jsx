import { useRef, useState } from "react";

function RefEx2()
{
    const [seconds, setSeconds] = useState(0);
    const timerId = useRef(null); // Keeps track of the interval ID
  
    const startTimer = () => {
      if (timerId.current !== null) return;
      
      timerId.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    };
  
    const stopTimer = () => {
      clearInterval(timerId.current);
      timerId.current = null; // Mutating .current doesn't cause a re-render!
    };
  
    return(
        <>
              <p>Time: {seconds}s</p>
              <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>

        </>
    );
}

export default RefEx2;