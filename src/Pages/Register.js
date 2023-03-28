import Navbar  from './Navbar';
import styles from '../CSS/Login.module.css'
import { MdAccountCircle } from "react-icons/md";

export default function Login(){
    return(
        <div className={styles.mainBox}>
            <Navbar/>
            <div className={styles.outer}>
            <div className={styles.inner}>
                <MdAccountCircle className={styles.icon}/>
                <div className={styles.textBox}>
                <input type="email" placeholder='Email'/>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <div className={styles.bottom}>
            <button>Register</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}