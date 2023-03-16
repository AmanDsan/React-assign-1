import React, { useState } from "react";
import '../CSS/component1.css'

export function Component1() {
  const [index, setIndex] = useState(0);
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0NCSIVW5k9Zzzk8aYyJoJq5JHleB5PoJKXw&usqp=CAU",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2Fyc3xlbnwwfHwwfHw%3D&w=1000&q=80",
    "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200"
  ];

  function handleChangeImage() {
    setIndex((index + 1)%images.length);
  }

  return (
      <div className="compOne">
        <img src={images[index]} alt={`Image ${index}`} />
        
        <div className="btn1">
        <button onClick={handleChangeImage}>Change Pic</button>
        </div>
      </div>
  );
}