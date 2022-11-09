import React, {useRef} from 'react'
import './App.css';

function App() {
 
  const videoRef=useRef()
 

  function HandlePlay(){
    videoRef.current.play()
  }
  function HandlePause(){
    videoRef.current.pause()
  }

  return (
    <div className="App">

   <video ref={videoRef}>
    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
    </video>

      <div className='buttons'>
        <button className='btn-play' onClick={HandlePlay}>play</button>
        <button className='btn-pause' onClick={HandlePause}>pause</button>
      </div>
    </div>
  );
}

export default App;
