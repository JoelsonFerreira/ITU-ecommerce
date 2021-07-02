import styles from '../styles/Cart.module.css';

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

            <div className = {styles.cartEnd}></div>
        </main>
    </div>
}

export default CartPage;