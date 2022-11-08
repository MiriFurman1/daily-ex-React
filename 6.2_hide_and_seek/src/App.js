import React from 'react'
import './App.css';



function App() {
  const [toggle,setToggle]=React.useState(false)

  return (
    <div className="App">
      <div className='container'>
        <button onClick={()=> setToggle((prevState) => !prevState)}>
      show/hide</button>
      <div className={toggle ? 'box' : ''}></div> 
      </div>
    </div>
  );
}

export default App;
