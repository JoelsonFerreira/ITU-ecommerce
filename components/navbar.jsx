import styles from '../styles/Navbar.module.css';
import { BiCart } from 'react-icons/bi';
import { GoSearch } from 'react-icons/go';

import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function NavBar() {

    const { cart } = useContext(CartContext);

    return (
        <nav className={styles.navbar}>
            <div className={styles.nav_left}>
                <Link href="/">
                    <a><h1 className={styles.nav_left_title}>ITU</h1></a>
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
                    <a style={{position: "relative"}}>
                        <BiCart 
                            size={30} 
                            color="#CCCCCC" 
                            className = "link"
                        />
                        <div className={styles.counter}>
                            {cart.length}
                        </div>
                    </a>
                </Link>
            </div>
        </nav>
    )

}

export default NavBar;