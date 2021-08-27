import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import styles from '../styles/ProductCard.module.css';

function ProductCard({ product }){ 

    const { title, price, image_url } = product;

    const { addProduct} = useContext(CartContext);

    return (
        <div  
            className={styles.container}
        >
            <div className={styles.image_container}>
                <div className = {styles.over}>
                    <button className = {styles.buybtn} onClick={() => {addProduct({ id: product["_id"], title, price, image_url, quant: 1,stock_qnt: product.quant });}}>Comprar</button>
                </div>
                <img src={image_url} />
            </div>
            <div className={styles.description}>
                <h3>{title}</h3>
                <p>R$ {price}</p>
            </div>
        </div>
    );
}

export default ProductCard;