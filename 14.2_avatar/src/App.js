import { useState,useEffect  } from 'react';
import './App.css';
import axios from 'axios';





function App() {
  // const [title,setTitle]=useState([])
  // const [firstName,setFirstName]=useState([])
  // const [lastName,setLastName]=useState([])
  // const [Image,setImage]=useState([])
  
  const[users,setUsers]=useState("")
  const[searchValue,setSearchValue]=useState("")
  

useEffect(()=>{
  const fetchData = async () => {
    const { data } = await axios.get('https://randomuser.me/api/?results=10');
    setUsers(data.results)

  };
  fetchData();

},[])

function handleChange(e){
      setSearchValue(e.target.value);
}

function searchHandler(){
  if(searchValue){
    users.filter((user)=>{
      return user.name.contains(searchValue)
    })
    console.log(users);
  }
}

  return (
    <div className='App'>
    

      <form>
        <label> filter by name</label>
        <input type="text" onChange={handleChange}></input> 
        <button onClick={searchHandler}> submit</button>
      </form>

<div className='users'>


{users&&users.map((user)=>{
        return (<div className='card'>
        <h3>{user.name["title"]} </h3>
        <h3>{user.name["first"]} {user.name["last"]}</h3>
        <img alt="" src={user.picture["large"]}></img>
        </div>
        )})}
</div>
      
    </div>
  );
}


export default App;



