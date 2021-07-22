import styles from '../styles/Cart.module.css';

import Link from 'next/link';

import NavBar from '../components/navbar';
import ProductCart from '../components/productCart';

import products from "../data/products";
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';



function CartPage() {
    const { cart } = useContext(CartContext);

    return <div className={styles.container}>
        <NavBar/>
        <main>
            {
                cart.map((prod, index) => (
                    <ProductCart 
                        key={index}
                        product={prod}
                    />
                ))
            }

            <div className = {styles.cartEnd}>
                <Link href = "/payPage">
                    <button className={styles.endButton}>Finalizar Compra</button>
                </Link>
                <h3 className = {styles.finalPrice}>Total: R$ 5000</h3>
            </div>
        </main>
    </div>
}

export default CartPage;