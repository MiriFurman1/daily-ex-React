import React, { useState } from 'react'
import './App.css';


function Makebuttons() {
  const [count, setCount] = useState(0)
  return (
    <div className='container'>
      <button onClick={() => { if (count < 10) setCount(count + 1) }}>increment</button>
      <button onClick={() => { if (count > -10) setCount(count - 1) }}>decrement</button>
      <label className={(count > 0) ? 'positive' : ((count === 0) ? 'zero' : 'negative')}>{count}</label>
    </div>
  )
}


class Buttons extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    return (
      <div className='container'>
        <button onClick={() => { if (this.state.count < 10) this.setState({ count: this.state.count + 1 }) }}>increment</button>
        <button onClick={() => { if (this.state.count > -10) this.setState({ count: this.state.count - 1 }) }}>decrement</button>
        <h4 className={(this.state.count > 0) ? 'positive' : ((this.state.count === 0) ? 'zero' : 'negative')}>{this.state.count}</h4>
        
      </div>
    )
  }
}
function App() {


  return (
    <div className="App">
      <Makebuttons />
      <Buttons />
    </div>
  );
}

export default App;
