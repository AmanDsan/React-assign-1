import styles from '../CSS/rightComponent.module.css'
import { FcClock } from "react-icons/fc";
export function RightComponent() {
    return(
        <div className={styles.rightBox}>
          <div className={styles.card1}>
            <h5>
                Showdown
            </h5>
            <span style={{fontSize:12}}>Stay Tuned</span>
            <div>
                <img src="https://w7.pngwing.com/pngs/348/194/png-transparent-death-note-youtube-l-anime-ryuk-l-death-note-thumbnail.png" alt="graph" />
            </div>
          </div>
          <div className={styles.card2}><h3>
            Trailer
            </h3>
            <button>Watch</button></div>
          <div className={styles.card3}>
          <FcClock style={{fontSize: 20}}/><h6>Coming Soon</h6>
          </div>
        </div>
    )
    
}