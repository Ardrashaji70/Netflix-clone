import './App.css'
import {useState}from 'react'

function App() {
  const [todos, setTodos] = useState([]);
  const [toDo, setToDo] = useState("");
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...todos, { id:Date.now(), text:toDo ,State:false}])} className="fas fa-plus"></i>
      </div>
    
     {todos.map((obj)=>{
        return (<div className="todos">
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
             console.log(e.target.checked);
             console.log(obj);
             setTodos(todos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.State=e.target.checked;
              }
              return obj2;

             }))
            }} value={obj.State} type="checkbox" name="" id="" />
            <p>{obj.text}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>)
     })}
     {todos.map((obj)=>{
      if(obj.states){
        return (<h1>{obj.text}</h1>)
      }
    })}
  </div>

);
}
 

export default App