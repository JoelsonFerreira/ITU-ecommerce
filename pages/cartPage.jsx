import styles from '../styles/Cart.module.css';

import Link from 'next/link';

import navstyles from "../styles/Navbar.module.css";
import ProductCart from '../components/productCart';

import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


function CartPage() {
    const { cart,getTotalPrice } = useContext(CartContext);

    return <div className={styles.container}>
        <nav className={navstyles.navbar}>
            <div className={navstyles.nav_left}>
                <Link href="/">
                    <a>
                        <h1 className={navstyles.nav_left_title}>ITU</h1>
                    </a>
                </Link>
            </div>
        </nav>
        <main>
            <div>
            {
                cart.map((prod, index) => (
                    <ProductCart 
                        key={index}
                        product={prod}
                    />
                ))
            }
            </div>
            {cart.length > 0 &&
            <div className = {styles.cartEnd}>
                <Link href = "/payPage">
                    <button className={styles.endButton}>Finalizar Compra</button>
                </Link>
                <h3 className = {styles.finalPrice}>Total: R$ {getTotalPrice()}</h3>
            </div>
            }
        </main>
    </div>
}

export default CartPage;