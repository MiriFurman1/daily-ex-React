import { ThemeContext } from "./App"
import { useContext } from "react"
import './App.css';

export function About(){
    const {darkTheme,setDarkTheme}=useContext(ThemeContext)
    console.log(darkTheme);
    const themeStyles={
        backgroundColor: darkTheme? "#333":"CCC",
        color: darkTheme?"#CCC":"333",
        padding:'2rem',
        margin:'2rem',
        width:'100vw',
        height:'90vh'
    }

return(
    <div>

<div className={themeStyles}>
<h2>about</h2>
    <h1>{darkTheme}</h1>
</div>


</div>
)
}