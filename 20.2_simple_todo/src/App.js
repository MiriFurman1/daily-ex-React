import React, { useState } from 'react'

import './App.css';




class Todo extends React.Component {

  constructor(props) {
    super(props)
    this.state = [
      { name: "CSS", completed: true },
      { name: "JavaScript", completed: true },
      { name: "Learn React", completed: false },
      { name: "Learn mongoDB", completed: false },
      { name: "Learn Node JS", completed: false }
    ]


  }

  clickHandler = (e) => {
    console.log("clicked");
    console.log(e.target.className);
    const clickedTodo = e.target.className
    let mapped = this.state.map((todo) => {
      return clickedTodo.includes(todo.name) ? { ...todo, completed: !todo.completed } : { ...todo }
    })
  }


  render() {
    return (
      <div>
        <h1>todo</h1>
        {this.state.map((todo) => {
          return (
            <div className={`${todo.name}  ${todo.completed ? "strike" : ""}`} key={todo.name} onClick={this.clickHandler.bind(this)}>
              {todo.name} {todo.completed ? "V" : "X"}
            </div>
          )
        })}
      </div>



    )
  }



}




function App() {



  return (
    <div className="App">

      <Todo />
    </div>
  );
}

export default App;
