import {useRecoilState,atom} from 'recoil'
import './App.css';

function App() {
  const colorAtom = atom({
    key: 'Color',
    default: true
  })
  const [isBlue, setIsBlue] = useRecoilState(colorAtom)

  const handleColor = ()=>{
    setIsBlue(!isBlue)
  }
  return (
    <div className="App">
     <h1 style={isBlue?{color:'blue'}:{color:'red'}}>By clicking the below button color can be changed.</h1>
     <button onClick={handleColor}>Change Colour</button>
    </div>
  );
}

export default App;