import { useState,useEffect  } from 'react';
import './App.css';






function App() {
  const [color,setColor]=useState("blue")
  const [borderRadius,setBorderRadius]=useState("0%")
  useEffect(()=>{
    setTimeout(()=>{setColor("red")},1000)
  },[])

  useEffect(()=>{
    setTimeout(()=>{setColor("green")},2000)
  },[])

    useEffect(()=>{
    setTimeout(()=>{setColor("yellow")},3000)
  },[])

  useEffect(()=>{
    setTimeout(()=>{setColor("pink")},4000)
  },[])

  useEffect(()=>{
    setTimeout(()=>{setColor("purple")},5000)
  },[])
  useEffect(()=>{
    setTimeout(()=>{setBorderRadius("50%")},5000)
  },[])

  return (
    <div className='App'>
      <div  className="box" style={{background:color,borderRadius:borderRadius}} />
      </div>
  );
}


export default App;



