import axios from "axios";

const baseurl = 'http://localhost:5000'

const getAllTodo = (setTodo)=>{
    axios.get(baseurl).then((data)=>{
        console.log('data-->',data.data);
        setTodo(data.data);
    });
}

const addtodo = (text, setText, setTodo) => {
    
    axios
      .post(`${baseurl}/`, { text })
      .then((data) => {
        console.log(data);
        setText("");
        getAllTodo(setTodo);
      })
      .catch((error) => {
        console.error('Error adding todo:', error);
      });
  }

  const updateTodo = (todoId,text,setText,setTodo, setisUpdating) => {
    
    axios
      .post(`${baseurl}/update`, {_id:todoId, text })
      .then((data) => {
        
        setText("");
        setisUpdating(false);
        getAllTodo(setTodo);
      })
      .catch((error) => {
        console.error('Error adding todo:', error);
      });
  }

  const deleteTodo = (_id, setTodo) => {
    axios
      .post(`${baseurl}/delete`, { _id }) // Pass _id in the request body
      .then((response) => {
        getAllTodo(setTodo);
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  }
  

export {getAllTodo , addtodo , updateTodo , deleteTodo};
