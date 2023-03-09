
export default function Card(props){
return(
    
    <div className="com">
    <img src = {props.User.image} style={{width:'100px',height:'100px'}}></img>
      <span className="desig">{props.User.designation}</span>
      <br/>
      <span className="clname">{props.User.name}</span>
      <p>{props.User.description}</p>
      </div>

    

)
}







      