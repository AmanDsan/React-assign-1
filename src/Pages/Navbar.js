import { MdAccountCircle } from "react-icons/md";
import styles from '../CSS/Navbar.module.css'
import {Link} from 'react-router-dom'
export default function Navbar(){
    return(
        <div className={styles.navBar}>
            <span>UI/UX design</span>
            <ul>
                <li><Link to={'/'} style={{textDecoration: 'none'}}>Home</Link></li>
                <li><Link to={'/About'} style={{textDecoration: 'none'}}>About us</Link></li>
                <li><Link to={'/Login'} style={{textDecoration: 'none'}}>Log in</Link></li>
            </ul>
            <MdAccountCircle style ={{fontSize : 40}}/>
        </div>
    )
}