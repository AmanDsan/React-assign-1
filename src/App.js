import { NavBar } from './Components/nav-bar';
import { LeftComponent } from './Components/leftComponent';
import { RightComponent } from './Components/rightComponent';
import './App.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <div className="content">
      <LeftComponent/>
      <RightComponent/>
     </div>
    </div>
  );
}

export default App;