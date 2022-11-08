import React, {useState} from 'react'
import './App.css';


function Makebuttons(){
  const [count,setCount]=useState(0)
  return(
    <div className='container'>
    <button onClick={()=>
       {if (count<10) setCount(count+1)}}>increment</button>
    <button onClick={()=>
       {if (count>-10)setCount(count-1)}}>decrement</button>
    <label className={(count>0) ? 'positive' : ((count===0)?'zero':'negative')}>{count}</label>
    </div>
  )
}

function App() {
  

  return (
    <div className="App">
      <Makebuttons/>
      
    </div>
  );
}

export default App;
