import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addProduct: (product) => {}
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        const res = cart.find(prod => prod.id == product.id);
        
        if(!res) {
            setCart(cart.concat(product));
        }

    }

    return (
        <CartContext.Provider value={{
            cart,
            addProduct
        }}>
            { children }
        </CartContext.Provider>
    );
}

