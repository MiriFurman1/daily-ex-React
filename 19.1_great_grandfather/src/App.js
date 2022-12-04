import React, { useEffect, useState } from 'react'
import './App.css';
import { createContext,useContext } from 'react';

export const giftsContext=createContext({gifts:[],setGifts:null})
function Grandfather(){
  const [gifts, setGifts] = useState([]);

  return(
    <div>
      <giftsContext.Provider value={{gifts, setGifts}}>
      <Father/>
      </giftsContext.Provider>
    </div>
  )
}
function Father(children){
  const arr=["xbox","books","computer"]
const context1=useContext(giftsContext)
const setGifts=(context1.setGifts);
setGifts(()=>arr)
  
  return(
    <div>
      <Child/>
    </div>
  )
}
function Child(){

  
  const giftsContext2=useContext(giftsContext)
  const giftsArr=giftsContext2.gifts
  return(
    <div>{giftsArr}</div>

  )
}

function App() {



  return (
<div>
  <Grandfather/>
</div>
  );
}

export default App;
