import styles from '../styles/Navbar.module.css';
import cartIcon from "../public/images/cart.svg";

function NavBar(){ 
    return (
        <nav className={styles.navbar}>
            <div className={styles.nav_left}>
                <h1 className ={styles.nav_left_title}>ITU</h1>
            </div>

            <div className ={styles.nav_center}>
                <div className = {styles.nav_center_search_background}>
                    <input type="text" className= {styles.nav_center_search} placeholder="Digite..." />
                </div>
            </div>
            
            <div className ={styles.nav_right}>
                <img src="/images/cart.svg" width={30} />
            </div>
        </nav>
    )

}

export default NavBar;