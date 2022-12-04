import { Link } from "react-router-dom"
import { useContext } from "react"
import { ThemeContext } from "./App"

export function Menu() {
    const {darkTheme,setDarkTheme}=useContext(ThemeContext)

    function setToggleTheme(){
        setDarkTheme(prev=>!prev)
        // console.log(darkTheme);
    }
    return (
        <nav>

            <Link to='/'>Home</Link>
            <Link to='/about'>about</Link>
            <button onClick={setToggleTheme}>make night</button>
        </nav>
    )
}