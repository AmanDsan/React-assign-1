import styles from '../CSS/leftComponent.module.css'
import { AiOutlinePlayCircle } from "react-icons/ai";
export function LeftComponent() {
    return(
        <div className={styles.leftBox}>
            <span>Welcome to UnderWorld</span>
         <h1>|Let's bring peace in this World .</h1>
         <p>We bring peace in this World by Destroying Evil.</p>
            
            <div className={styles.buttonBox}>
                <button className={styles.btn1}>Get Started</button>
                <span className={styles.spn1}><AiOutlinePlayCircle style={{fontSize: 30,margin: 5}}/>Know More</span>
            </div>
         
        </div>
    )
    
}