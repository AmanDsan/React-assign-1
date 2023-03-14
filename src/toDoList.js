import React, { useState } from 'react';
import './App.css'

function DoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [count, setCount] = useState(0)

  const countTask = ()=>{
    setCount(count+1)
  }

  const decreaseTask = ()=>{
    if(count>0){
        setCount(count-1)
    }
  }

  // const deecreaseTask2 = (index) => {
  //   const newTasks = [...tasks];
  //   newTasks[index].completed ? setCount(count + 1) : setCount(count -1)
  // }
  

  const handleBoth1 = (index,task)=>{
    decreaseTask();
    handleComplete(index)
  }

  const handleBoth2 = (index)=>{
    decreaseTask();
    handleDelete(index)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask('');
  };

  const handleComplete = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleDelete = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div>
      <h1 style={{ position: 'sticky', top:0, backgroundColor: 'rgb(59, 53, 53)', width:'100%', 
      textAlign: 'center'}}>Pending Tasks ({count})</h1>
      
      
        {tasks.map((task, index) => (

          <li className='listItem'
            key={index}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' ,listStyleType: 'none'}}
          >
           <div style={{fontSize:20, overflowWrap: 'break-word', inlineSize: 176}}>{task.text}</div>
            <div className='btnDiv'><button onClick={() => handleBoth1(index,task)}>Complete</button>
            <button onClick={() => handleBoth2(index)}>Delete</button>
            </div>
           
          </li>
        
        ))}
      

      <form onSubmit={handleSubmit} style={{position: 'sticky', bottom:0, backgroundColor: 'rgb(59, 53, 53)', 
      width:'100%', textAlign: 'center'}}>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button style={{margin : 10, padding:10, backgroundColor: 'green', border:'none',
         borderRadius: 5, color: 'white'}} type="submit" onClick={countTask}>Submit</button>
      </form>
    </div>
  );
}

export default DoList;

