import styles from '../styles/ProductCart.module.css';

import {AiFillPlusSquare} from 'react-icons/ai';
import {AiFillMinusSquare} from 'react-icons/ai';
import {AiFillCloseCircle} from 'react-icons/ai';

function ProductCart({ title, image_url, price, quant }){
    return <div className = {styles.cart_container}>
        
        <div className = {styles.cart_image}>
            <img src={image_url} className = {styles.productCart_image}/>
        </div>

        <div className = {styles.cart_content}>
            <div className={styles.productCart_title}>
                <h1>{ title }</h1>
            </div>
            
            <div className = {styles.productCart_price}>
                <h2>{ "R$ " + price }</h2>
            </div>
            
            <div className = {styles.cart_MinusPlus}>
                <AiFillMinusSquare color="#555555" size={20}/>
                <h3 className = {styles.productCart_quant}>{ quant }</h3>
                <AiFillPlusSquare color = "#CCCCCC"size={20}/>
            </div>
           
        </div>
        <div className = {styles.cart_exit}>
            <AiFillCloseCircle color="red" />
        </div>
    </div>

}


export default ProductCart;