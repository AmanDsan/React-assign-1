import {useState} from "react"
import './App.css';

function App() {
   const [count,setCount] = useState(0)

function Increment(){
   setCount(count+1)
}

function Decrement(){
  if(count>0){
    setCount(count-1)
  }
}

  return (
    <div className = "edit">
    <p>{count}</p><br/>
    <button onClick= {Increment}>Increase Count</button>
    <button onClick = {Decrement}>Decrease Count</button>
    </div>
  );
}

export default App;
