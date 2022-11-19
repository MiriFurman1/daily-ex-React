import { useState,useEffect } from 'react';
import './App.css';


export default function App() {
  //checks the local storage for todos items
  const [todos, setTodos] = useState(()=>{
    const savedTodos=localStorage.getItem("todos")
    if(savedTodos){
      return JSON.parse(savedTodos)
    }
    else{
      return []
    }
  }) 

  const [todo, setTodo] = useState("") 
  const [checked,setChecked]=useState([])


  useEffect(()=>{ //ehwn todos update store them in the local storage
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  function handleInputChange(e) { //when user writes in the input, save it as a todo (onChange)
    setTodo(e.target.value)
  }

  function handleFormSubmit(e) { //when the forms submit save the to do to the todos array 
    e.preventDefault();
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo.trim()
        }
      ]);
    }
    setTodo(""); //empty the todo after saving
  }

  function handleDeleteClick(id){
    const removeItem=todos.filter((todo)=>{
      return todo.id!==id;
    })
    setTodos(removeItem)
  }

  function handleCheckboxChange(){
    console.log("this box was toggled");
    setChecked([...checked,
      {todo:!checked}
    ]
     )
  }


  return (
    <div className="App">

      <form onSubmit={handleFormSubmit}>
        <h2>Add Todo</h2>
        <label htmlFor="todo">Add todo: </label>
        <input
          name="todo"
          type="text"
          placeholder="Create a new todo"
          value={todo}
          onChange={handleInputChange}
        />
        <button type="submit">Add</button>
      </form>
  

    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" onChange={handleCheckboxChange} value={checked}></input>
          {todo.text}

          <button onClick={() => handleDeleteClick(todo.id)}>Delete</button> 
          {checked[todo]?"checked":"not checked"}
        </li>
      ))}
    </ul>
  </div>
);
      }