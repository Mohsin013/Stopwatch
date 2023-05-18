import "./styles.css";
import {useState} from "react";

export default function App() {
  const [counter, setCounter]=useState(0)
  const [timer,setTimer]=useState(null)
  const [id,setId]=useState(0)
  const start=()=>{
    if(timer==null){
      setCounter(0)
    setTimer(setInterval(()=>{
      setCounter((p)=>p+1)
      setId(timer);
    },1000))
  }
  }
  const pause=()=>{
    setId(timer)
    clearTimeout(timer)
  }
  const resume=()=>{
    if(id==timer){
    setTimer(setInterval(()=>{
      setCounter((p)=>p+1)
    },1000))
  }
  }
  const reset=()=>{
    console.log(timer)
    clearTimeout(timer)
    setCounter(0);
    setTimer(null)
  }
  return (
    <div className="App">
     <h1 className="Title">Best Timer App</h1>
     <h1>{counter}</h1>
     <button onClick={start}>Start</button>
     <button onClick={pause}>Pause</button>
     <button onClick={resume}>Resume</button>
     <button onClick={reset}>Reset</button>
    </div>
  );
}
