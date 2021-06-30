// import styles from '../styles/ProductCard.module.css';

function productCard({ title, price, image_url }){ 
    return (
        <div className="container">
            <img className="image_url" src={image_url} />
            <a className="title" >{title}</a>
            <a className="price" >{price}</a>
        </div>
    );
}

export default productCard;