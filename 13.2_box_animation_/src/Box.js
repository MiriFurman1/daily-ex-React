import { useState,useEffect } from 'react';

function Box(){
    const [flag,setFlag]=useState(false)
useEffect(()=>{
    setTimeout(()=>{
        setFlag(true)
        return ()=>{}
    },1000)

  
})

useEffect(()=>{
   setTimeout(()=>{
        setFlag(false)
    },5000)
})
return(
    <div className={flag?"box":""}></div>
)
}

export default Box;