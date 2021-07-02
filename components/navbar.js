import styles from '../styles/Navbar.module.css';
import { BiCart } from 'react-icons/bi';
import { GoSearch } from 'react-icons/go';

import Link from 'next/link';

function NavBar(){ 
    return (
        <nav className={styles.navbar}>
            <div className={styles.nav_left}>
                <Link href="/">
                    <h1 className={styles.nav_left_title}>ITU</h1>
                </Link>
            </div>

            <div className ={styles.nav_center}>
                <div className = {styles.nav_center_search_background}>
                    <input type="text" className= {styles.nav_center_search} placeholder="Buscar" />
                    <GoSearch color="#cccccc" />
                </div>
            </div>
            
            <div className ={styles.nav_right}>
                <Link href="/cartPage">
                    <BiCart size={30} color="#CCCCCC" className = "link"/>
                </Link>
            </div>
        </nav>
    )

}

export default NavBar;