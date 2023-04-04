import {taskListAtom} from './Atom'
import {useRecoilValue} from 'recoil'


export function Task(){
  const tasks = useRecoilValue(taskListAtom)
  return(
    <div style={{position:'absolute', margin:'2rem 5rem'}}>
    <h1>Tasks to do!</h1>
    {tasks.map((e,index)=>{
     return <ul key={index} style={{marginTop: 2}}>
        <li>{<h2>{e}</h2>}</li>
      </ul>
    })}
    </div>
  )
}