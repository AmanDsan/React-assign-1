import { Link } from "react-router-dom"
import { useState } from "react"
import {useRecoilState} from 'recoil'
import {taskListAtom} from "./Atom"

export function Home() {
    const [data , setData] = useState('')
  const [addTask, setAddTask] = useRecoilState(taskListAtom);

  function handleChange(e) {
    setData(e.target.value)
  }

  function addTasksList(){
    setAddTask([...addTask, data])
    setData('')
  }
    return (
        <>
        <h1>Home page</h1>
        <input type="text"  onChange={handleChange} value={data}/>
       <div>
       <button onClick={addTasksList}>Add Task +</button>
        <Link to={'Task'}><button>Check Tasks</button></Link>
       </div>
        </>
    )
}