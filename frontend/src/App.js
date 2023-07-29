import { useEffect, useState } from "react";
import {getAllTodo , addtodo , updateTodo ,deleteTodo} from './handleApi';

function App() {
  const [text , setText] = useState("");
  const [todo , setTodo] = useState([]);
  const [isUpdating , setisUpdating] = useState(false);
  const [todoId , settodoId] =useState("");

  useEffect(()=>{
    getAllTodo(setTodo);
  },[]);

  //update task
  const updateMode = (_id , text)=>{
    setisUpdating(true);
    setText(text);
    settodoId(_id);
  }

  


  return (
    <div className="App">
      <br /> <br />
      <div className="card" style={{ width: "40rem", margin: "auto" }} >

        <div className="card-body" style={{ margin: "auto", textAlign: "center" }}>

          <form className="row g-3" >
            <h5 className="card-title"><button onClick={(e)=>{e.preventDefault()}} className="btn btn-warning btn-lg" style={{fontSize:"2rem" , color:"white"}}>Tasks</button></h5><hr />
            <div className="col-auto">
              
              <input type="text" className="form-control" id="inputPassword2" placeholder="Enter tasks here..."
              // setting values to our input tag
               style={{ width: "30rem", border: "2px solid RGB(167 185 204)" }} 
               value={text} 
              onChange={(e)=> setText(e.target.value)}  />
            </div>
            <div className="col-auto">
              {/* adding items whe button is clicked  */}

               {isUpdating ? <button 
              onClick={(e)=>{updateTodo(todoId,text,setText,setTodo, setisUpdating); e.preventDefault();}}  className="btn btn-success"
             >Update</button> : <button 
             onClick={(e)=>{addtodo(text,setText,setTodo); e.preventDefault();}}  className="btn btn-primary"
            >Add Task</button>  }
               
               
              
            </div>
          </form>

        </div>
        {/* showing all the items that we have added */} 

        <div className="show-tasks" style={{  width: "100%", margin: "auto" }}>
          <div className="task">
          <ul className="list-group" >
          {todo.map((item , index)=>{
            return(
              
              <li className="list-group-item" style={{  backgroundColor:"black" , color:"white" ,  fontSize:"1.5rem" }}  key={index} >
                <span>{item.todo}</span>

                <div className="task-button" style={{  display:"inline-block", float: "right" }} >
                        <button className="btn btn-success btn-sm"  onClick={()=>{updateMode(item._id, item.todo)}} >Update</button>
                  &nbsp;<button className="btn btn-danger btn-sm"  onClick={()=>{deleteTodo(item._id , setTodo)}}>Delete</button>
                </div>
              </li>
              

            
            )
          })}
          </ul>
          <br/>
          {/* <center><button className="btn btn-secondary btn-lg" onClick={clearTask} >Clear Tasks</button></center> */}
            
          </div>
          <br /><br />

        </div>
      </div>
    </div>
    
  );
}

export default App;
