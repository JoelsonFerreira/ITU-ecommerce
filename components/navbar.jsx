import styles from '../styles/Navbar.module.css';
import { BiCart } from 'react-icons/bi';
import { GoSearch } from 'react-icons/go';

import Link from 'next/link';
import { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';

function NavBar({ onSearch }) {

    const { cart } = useContext(CartContext);

    const [search, setSearch] = useState("");

    return (
        <nav className={styles.navbar}>
            <div className={styles.nav_left}>
                <Link href="/">
                    <a onClick={() => {
                        setSearch("");
                        onSearch("");
                    }}>
                        <h1 className={styles.nav_left_title}>ITU</h1>
                    </a>
                </Link>
            </div>

            <div className ={styles.nav_center}>
                <div className = {styles.nav_center_search_background}>
                    <input 
                        type="text" 
                        className= {styles.nav_center_search} 
                        placeholder="Buscar" 
                        value={search}    
                        onChange={e => {
                            setSearch(e.target.value);
                            onSearch(e.target.value);
                        }}
                    />
                    <GoSearch color="#cccccc" onClick={() => onSearch(search)} />
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