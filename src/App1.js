import Inp from './App2';
import Sub from './App3';

 
function Head(props){
    return(
        <h3>{props.hea}</h3>
    )
};


function Main(){
    
const tp = "Submit"
const hd = "Register here ..."

  return( 
    <div id ="bor">
    <Head hea = {hd} />
    <Inp />
    <Sub name ={tp}/> 
    </div>
  )
}
export default Main;