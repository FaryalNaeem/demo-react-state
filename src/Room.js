import React, { useState } from 'react';
import './Room.css'

function Room() {
    //const state = useState(false);
    //console.log(state);
    let [isLit, setLit] = useState(false);
    let [age, setAge] = useState(24);
    //function updateLit() {
      //  console.log ("Button Clicked");
        //setLit(!isLit);
    

    return (
    <div className ={"room"+(isLit?"lit":"dark")}>  
        This room is {isLit? "lit" : "dark"}
        <br/>
        Age: {age}
        <br/>
        <button onClick= {()=> setLit(!isLit)} > Toggle Light</button>
        <br/>
        <button onClick= {()=> {
                   // console.log("increaseAge arrow function");
                    setAge(++age);
                 }} > Increase Age</button>
    </div>
    );
                }
  
export default Room;
