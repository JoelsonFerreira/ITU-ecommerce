import styles from '../styles/Navbar.module.css';
import { BiCart } from 'react-icons/bi';

function NavBar(){ 
    return (
        <nav className={styles.navbar}>
            <div className={styles.nav_left}>
                <h1 className ={styles.nav_left_title}>ITU</h1>
            </div>

            <div className ={styles.nav_center}>
                <div className = {styles.nav_center_search_background}>
                    <input type="text" className= {styles.nav_center_search} placeholder="Buscar..." />
                </div>
            </div>
            
            <div className ={styles.nav_right}>
                <BiCart size={30} color="#CCCCCC" />
            </div>
        </nav>
    )

}

export default NavBar;