import React, {useState} from 'react'
import './App.css';




function MyButton({ colorProp, setColor }){
  return(
    <button       
    onClick={() => {
      setColor(colorProp);
    }}
    >{colorProp}</button>
  )

}

function App() {
  const [colorTo, setColorTo] = useState('Red');
  const colors = ["blue","red","yellow"];

  const insertButtons=()=>{
    return colors.map((color) => <MyButton colorProp={color} setColor={setColorTo} /> );
  }


  return (
    <div className="App">
    {insertButtons()}
    <div>
    <h4>{colorTo}</h4>
    </div>
    
      
    </div>
  );
}

export default App;
