import { useRef, useState } from "react";

function StopWatch(){
    const [timer,setTimer]=useState(0);
    const [seconds,setSeconds]=useState(58);
    const [minutes,setMinutes]=useState(0);
    const timerId=useRef(0);
    
    function startTimer(){
    timerId.current = setInterval(()=>{
        setTimer(t=>{
            if(t>=100){
                setSeconds(s=>{
                    if(s>=59){
                        setMinutes(m=>m+1);
                        return 0;
                    }
                    return s+1
                });
                return 0;
            }
            return t+1;
        })
    },10);
    }
    function padZero(n: number){
        return n >=10 ? n : "0"+n
    }
    return(
        <div>
            <h1>Stop Watch</h1>
            <div className="box">
                <p>{padZero(minutes)}:{padZero(seconds)}:{padZero(timer)}</p>
                <div className="buttons">
                    <button onClick={startTimer} style={{backgroundColor:"lightgreen"}}>Start</button>
                    <button style={{backgroundColor:"red"}}>Stop</button>
                    <button style={{backgroundColor:"lightblue"}}>Reset</button>
                </div>
            </div>
        </div>
    );
}
export default StopWatch