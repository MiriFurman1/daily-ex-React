import data from './assets/data.json'
import './App.css';
import ListItem from './components/ListItem/ListItem';
import { MapList } from './components/MapList';

function App() {
console.log(data);
  return (
    <div className="App">
  <MapList/>
    </div>
  );
}

export default App;
