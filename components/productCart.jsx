import styles from '../styles/ProductCart.module.css';

import {AiFillPlusSquare} from 'react-icons/ai';
import {AiFillMinusSquare} from 'react-icons/ai';
import {AiFillCloseCircle} from 'react-icons/ai';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';


function ProductCart({ product }){
    const { title, image_url, price, quant,stock_qnt } = product;
    const { removeProduct,incrementProduct,decrementProduct } = useContext(CartContext);

    return <div className = {styles.cart_container}>
        
        <div className = {styles.cart_image}>
            <img src={image_url} className = {styles.productCart_image}/>
        </div>

        <div className = {styles.cart_content}>
            <div className={styles.productCart_title}>
                <h3>{ title }</h3>
            </div>
            
            <div className = {styles.productCart_price}>
                <h4>{ "R$ " + price }</h4>
            </div>
            
            <div className = {styles.cart_MinusPlus}>
                <button onClick = {() => decrementProduct(product)}><AiFillMinusSquare color="#555555" size={20}/></button>
                
                <h3 className = {styles.productCart_quant}>{ quant }</h3>
                <button onClick = {() => incrementProduct(product,stock_qnt)}><AiFillPlusSquare color = "#CCCCCC"size={20} /></button>
                
            </div>
           
        </div>
            <button  className = {styles.cart_exit} onClick = {() => removeProduct(product)}><AiFillCloseCircle color="red" /></button>
    </div>

}


export default ProductCart;