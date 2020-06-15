import React, { useState } from 'react';
import './Room.css';

function Room() {
    //const state = useState(false);
    //console.log(state);
    let [isLit, setLit] = useState(true);
    
    //let [age, setAge] = useState(24);
    let [temp,settemp] = useState(72);
    //function updateLit() {
      //  console.log ("Button Clicked");
        //setLit(!isLit);
    

    return (
    <div className = {`room ${isLit? "lit" : "dark"}`}>  
        This room is {isLit? "lit" : "dark"}
        <br/>
        Temp:{temp}
        <br/>
        <button onClick= {()=>setLit(true)} > Toggle On</button>
        <button onClick= {()=> setLit()} > Toggle off</button>
        <br/>
        <button onClick={()=>settemp(++temp)}> +  </button>
        <button onClick={()=>settemp(--temp)}> -  </button>
    
    </div>
    );
}
  
export default Room;
