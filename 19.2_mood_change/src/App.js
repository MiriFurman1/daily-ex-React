import React, { useState } from 'react'
import './App.css';
import { Menu } from './Menu';
import { Home } from './Home';
import { About } from './About';
import { Route, Router,Routes} from 'react-router-dom';

export const ThemeContext= React.createContext()


function App() {
const [darkTheme,setDarkTheme]=useState(false)


  return (
    <div className="App">
      <ThemeContext.Provider value={{darkTheme,setDarkTheme}}>
      <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
        </ThemeContext.Provider>

    </div>
  );
}

export default App;
