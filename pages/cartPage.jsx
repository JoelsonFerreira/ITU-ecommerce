import styles from '../styles/Cart.module.css';

import Link from 'next/link';

import NavBar from '../components/navbar';
import ProductCart from '../components/productCart';

import products from "../data/products";



function CartPage() {
    return <div className={styles.container}>
        <NavBar/>
        <main>
            {
                products.map((prod, index) => (
                    <ProductCart 
                        key={index}
                        title={prod.title}
                        image_url={prod.image_url}
                        price={prod.price}
                        quant={prod.quant}
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