import styles from '../CSS/nav-bar.module.css'
import { MdMenu } from "react-icons/md";
import { useState } from 'react';
export function NavBar() {
    const [menu, setMenu] = useState(true)

    function handleClick() {
        setMenu(!menu)
    }
    return(
        <div className={styles.navBar}>
        <div className={styles.listItems}>
            <img src="https://w7.pngwing.com/pngs/341/725/png-transparent-death-note-rectangle-brand-black-m-creame-text-rectangle-black-thumbnail.png" alt="Logo" />
            <span className={styles.nameSpan}>Light Yagami |</span>
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About Us</li>
        </ul>
       
        </div>
        <div>
            <button className={styles.plainBtn}>Login</button>
            <button className={styles.btn2}>Sign Up</button>
            <MdMenu style={{fontSize: 40}} className={styles.menu} onClick={handleClick}/>
            {menu&& <ul className={styles.hiddenMenu}>
            <li>Home</li>
            <li>Services</li>
            <li>Contact</li>
            <li>About Us</li>
            <button>Login</button>
            <button>Sign Up</button>
            </ul>}
        </div>
        </div>
    )
}