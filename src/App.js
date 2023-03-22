import {Profiles} from './Components/horizontal-Scroller'
import Board from './Components/board';
import './App.css';

function App() {
  const profileArray = [{
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT4BMLu4HNcPC1y5vbiDZdceiwsRhU13dYQg&usqp=CAU" ,
    name : "Yoichi Isagi" ,
    description : "Football Trainee",
    anime: 'Blue Lock'
  }, {
    image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8F5z9rp7k0xvTn1q8qLWFimKmKL34iew7kA&usqp=CAU" ,
    name : "Eren Jeager" ,
    description : "Founder Titan",
    anime: 'Attack on Titan'
  }, {
  image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_xTqm9OTEAaZJ44UZCYJfL7LI977yteHh1vnk42hbW6hm4nL6qbkVcrj1Ky1XBETedM&usqp=CAU" ,
  name : "Sung Jin-woo" ,
  description : "E-Rank Hunter",
  anime: 'Solo Leveling'
}, {
  image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMXXAwvHAqs4KADQkOEQM2wCS8atHGnmGw39N0A1x1eKO19NzHoB4lfV8CwGe0zv32a7E&usqp=CAU" ,
  name : "Goku" ,
  description : "Earth Savior",
  anime: 'Dragon Ball Z'
}, {
  image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_6-g5KhWFbuxFjiIgnfpr7wt9uZgA4UvcwfrqI4mjRQpY8SOVSQIbGdXGujARRVGR0Wo&usqp=CAU" ,
  name : "Makima" ,
  description : "Devil Hunter",
  anime: 'Chainsaw Man'
}]
  return (
    <div className="App">
      <div className='horizontalScroller'>
      <div className='heading'>
          <h1>Top Animes to Watch</h1>
          <p>Given below are few of the top best animes to watch in 2023 </p>
        </div>
      <div className="task1">
      {profileArray.map((x)=>{
        return(
          <li><Profiles User ={x}/></li>
        )
      })}
      </div>
      </div>
      <div>
      <Board/>
      </div>
    </div>
  );
}

export default App;