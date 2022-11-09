import React, {useRef} from 'react'
import './App.css';


function ImageChangeWithMouse({primaryImg,secondaryImg}){
  const imageRef=useRef(null)

  return(
    <img   alt="" width="500px"  src={primaryImg} ref={imageRef}
    onMouseOver={(e)=>{
      imageRef.current.src=secondaryImg
      console.log(e);
    }}
    
    onMouseOut={(e)=>{
      imageRef.current.src=primaryImg
    }}

    />
  )
}



function App() {


  return (
    <div className="App">
<ImageChangeWithMouse
primaryImg={"img/image1bw.jpg"}
secondaryImg={"img/image1.jpg"}
/>
<ImageChangeWithMouse
primaryImg={"img/image2bw.jpg"}
secondaryImg={"img/image2.jpg"}
/>
    </div>
  );
}

export default App;
