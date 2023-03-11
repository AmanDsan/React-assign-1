import { useState } from "react";

export function ChangeName(){
    const [name,setName]= useState("Amit")

    function Chname(){
        setName(name === "Amit"? "Rajan" : "Amit")
    }

    return(
        <div className = "edit">
            <h1>My name is {name}</h1><br/>
            <button onClick={Chname}>Change Name</button>
        </div>
    )
}