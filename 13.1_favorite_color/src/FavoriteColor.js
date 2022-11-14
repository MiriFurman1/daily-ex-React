import React, { useState ,useEffect } from 'react';

function FavoriteColor() {
    const [color, setColor]=useState("blue")
    
    let message = `my favorite color is ${color}`
   
    useEffect(()=>{
      setTimeout(()=>{
        setColor("red")
      },1000)
    })

    return (
      <div>
    <h1>{message}</h1>
    <div id=""></div>
    </div>
    )       
}
export default FavoriteColor