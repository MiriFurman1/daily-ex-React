
import React, { useEffect, useState } from 'react'
import './App.css';






class Box extends React.Component{
  constructor(props){
    super(props);
    this.state={flag:false}
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState((prev)=>{
        return {Flag:true}
      })

  },1000)

  setTimeout(()=>{
    this.setState((prev)=>{
      return {Flag:false}
    })

},5000)
  }

render(){
  return(
    <div className='App'>
    <div className={this.state?"box":""}></div>
    </div>
  )
}

}

function App() {



  return (
    <div className="App">
<Box />
<Box />
<Box />
    </div>
  );
}

export default App;
