import styles from '../styles/ProductCard.module.css';

function ProductCard({ title, price, image_url }){ 
    return (
        <div className={styles.container}>
            <img src={image_url} />
            <div className={styles.description}>
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default ProductCard;