import React, {useState} from 'react'
import './App.css';

function MyCheckbox(props){
  const [isChecked,setIschecked]=useState(props.checked)
return(
  <div>
  <input type="checkbox" checked={isChecked}></input>
  <label>{props.title}</label>
  </div>
)

}




function App() {


  return (
    <div className="App">
  <form>
<MyCheckbox  checked={false} title="i read the term of the app"/>
<MyCheckbox checked={false} title="i accept the term of the app"/>
<MyCheckbox checked={true} title="i want to get the weekly news letter"/>
<MyCheckbox checked={true} title="i want to get sales and offers"/>

  </form>
      
    </div>
  );
}

export default App;
