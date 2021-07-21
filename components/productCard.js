import styles from '../styles/ProductCard.module.css';

function ProductCard({ title, price, image_url }){ 
    return (
        <div className={styles.container}>
            <div className={styles.image_container}>
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