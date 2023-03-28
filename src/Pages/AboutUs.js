import Navbar  from './Navbar';
import styles from '../CSS/Aboutus.module.css'

export default function AboutUs(){
    return(
        <div className={styles.mainContainer}>
            <Navbar/>
            <div className={styles.content}>
                <h1>About Us</h1>
                <div className={styles.mainBox}>
                <div className={styles.imageBox}>
                    <img src="https://images8.alphacoders.com/505/thumbbig-505616.webp" alt="AOT" style={{height: '18rem', width: '12rem'}} />
                    <p>Attack on Titan </p>
                </div>
                <div className={styles.textBox}>
                    <h3>A.O.T</h3>
                    <p>When man-eating Titans first appeared 100 years ago, humans found safety behind massive walls that stopped the giants in their tracks. But the safety they have had for so long is threatened when a colossal Titan smashes through the barriers, causing a flood of the giants into what had been the humans' safe zone. During the carnage that follows, soldier Eren Jaeger sees one of the creatures devour his mother, which leads him to vow that he will kill every Titan. He enlists some friends who survived to help him, and that group is humanity's last hope for avoiding extinction at the hands of the monsters.</p>
                    <div className={styles.cardContainer}>
                        <div className={styles.card}>
                            <h4>Top Animes this month</h4>
                            <ul>
                            <li>Attack on Titan</li>
                                <li>Blue Lock</li>
                                <li>Demon Slayer</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h4>Upcoming Animes</h4>
                            <ul>
                                <li>Solo Leveling</li>
                                <li>Demon Slayer Season 3</li>
                                <li>Chainsaw Man Season 2</li>
                            </ul>
                        </div>
                        <div className={styles.card}>
                            <h4>Are you intrested in Mangas ?</h4>
                            <ul>
                                <li>One Piece</li>
                                <li>Tokyo Revengers</li>
                                <li>Dr. Stone</li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}