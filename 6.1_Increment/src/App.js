import React, {useState} from 'react'
import './App.css';


function Counter(){
  const [count,setCount]=useState(0)
  return (
    <div>
    <button onClick={()=> setCount(count+1)}>
      increment</button>
    <label>{count}</label>
    </div>
  )
}

function App(props) {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;
