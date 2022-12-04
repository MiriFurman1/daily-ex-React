import { ThemeContext } from "./App"
import { useContext } from "react"
import './App.css';

export function Home(){
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

<div className={themeStyles}>home

    <h1>{darkTheme}</h1>
</div>


</div>
)
}