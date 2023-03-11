import {useState} from "react"



export function ListItems(){
  const [Userinput,setInput] = useState("")
  const [list,setList] = useState([])


    return(
        <div className = "edit">
        <input type = "text" value = {Userinput} onChange={e => {setInput(e.target.value)}}/>
        <button onClick = {e =>{setList([...list,{id: list.length + 1, task: Userinput}]);
          setInput("");}}>Add</button>
         <ul style={{listStyle: "none"}}>
            {list.map(m => (<li key = {m.id}>{m.task}</li>))}
          </ul>
        </div>
    )
} 