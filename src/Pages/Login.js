import Navbar  from './Navbar';
import {Link} from 'react-router-dom'
import styles from '../CSS/Login.module.css'

export default function Login(){
    return(
        <div className={styles.mainBox}>
            <Navbar/>
            <div className={styles.outer}>
            <div className={styles.inner}>
                <img src="https://images7.alphacoders.com/418/thumbbig-418724.webp" alt="Attack Titan" />
                <div className={styles.textBox}>
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <div className={styles.bottom}>
                    <div>
                <p>Don't have account?</p>
            <Link to={'/Register'} style={{fontWeight:'bold'}}>Register Here</Link>
                    </div>
            <button>Login</button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}