import React, {useState} from 'react'
import './App.css';
import data from './data'



function Returnnames (){
return( data.map(x=>x.name
))
}

function Beforenineties(){
  return(data.filter(x=>x.birthday.slice(-4)<"1990"))
}



function App() {

  return (
    <div className="App">
    
      
    </div>
  );
}

export default App;
