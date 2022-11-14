import { useState,useEffect  } from 'react';
import './App.css';






function App() {
  const[timer,setTimer]=useState(true)
useEffect(()=>{
  setTimeout(()=>{
    setTimer(false)
  },2000)
},[timer])

  return (
    <div className='App'>
  <div className={timer?"lds-ring":""}><div></div><div></div><div></div><div></div></div>
      </div>
  );
}


export default App;



