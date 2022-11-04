
import './App.css';


function App() {
const data = ["hello", "world"];
let data1=data.join(" ")

const number1 = 5;
const number2 =6;

const string = "I love React!"
  return (
    <div className="App">
      <header className="App-header">
      <p>{data1} </p>
      <p>{number1+number2}</p>
      <p>the string's length is {string.length}</p> 
      </header>
    </div>
  );
}

export default App;
