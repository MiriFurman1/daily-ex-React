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
  const[isEditing,setIsEditing]=useState(false)
  const[currentTodo,setCurrentTodo]=useState({})


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

function handleEditInputChange(e){
   // set the new state value to what's currently in the edit input box
  setCurrentTodo({...currentTodo,text:e.target.value})
  
}

function handleEditClick(todo) {
  // set editing to true
  setIsEditing(true);
  // set the currentTodo to the todo item that was clicked
  setCurrentTodo({ ...todo });
}

function handleUpdateTodo(id, updatedTodo) {
  //map over the todos, if the id matches to the changed id, change the todo to the updated todo
  //else just return the normal todo
  const updatedItem = todos.map((todo) => {
    return todo.id === id ? updatedTodo : todo;
  });
  // set editing to false because this function will be used inside a onSubmit function - which means the data was submited and we are no longer editing
  setIsEditing(false);
  // update the todos state with the updated todo
  setTodos(updatedItem);
}

function handleEditFormSubmit(e) {
  e.preventDefault();
  // call the handleUpdateTodo function - passing the currentTodo.id and the currentTodo object as arguments
  handleUpdateTodo(currentTodo.id, currentTodo);
}
//how the edit works
//1. handle edit clicked is called when you click on the edit button
//2. the edit form shows on the screen instead of the normal form
//3. handleEditInputChange is called on change and updates the and sets the current todo as the input value
//4. when submitted, handleEditSubmit is called 
//5. it calls the handleUpdateTodo with the current todo id and the current todo item
//6. handleUpdateTodo maps all the todos list and changes the todo which was updated, 
// he saves it as an variable and sets the todos as this variable. the is editing is set to false and the normal form appears


  return (
    <div className="App">
      {/* you either display the add todo form, or the edit info form */}
    {isEditing ? (
      // if we are editing - display the edit todo input
      
      <form onSubmit={handleEditFormSubmit}>
        <h2>Edit Todo</h2>
        <label htmlFor="editTodo">Edit todo: </label>
        <input
          name="editTodo"
          type="text"
          placeholder="Edit todo"
          value={currentTodo.text}
          onChange={handleEditInputChange}
        />
        <button type="submit">Update</button>
        <button onClick={() => setIsEditing(false)}>Cancel</button>
      </form>
    ) : (
      // if we are not editing - display the add todo input
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
    )}

    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {/* we are passing the entire todo object to the handleEditClick function*/}
          <button onClick={() => handleEditClick(todo)}>Edit</button>
          <button onClick={() => handleDeleteClick(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
);
      }