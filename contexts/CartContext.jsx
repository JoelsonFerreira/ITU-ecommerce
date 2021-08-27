import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addProduct: (product) => {},
    removeProduct: (product) => {}
});

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProduct = (product) => {
        const res = cart.find(prod => prod.id == product.id);
        
        if(!res) {
            setCart(cart.concat(product));
        }

    }

    const removeProduct = (product) => {
        const resIndex = cart.findIndex(prod => prod.id == product.id);
        

        if(resIndex != -1) {
            const newCart = cart.slice();
            newCart.splice(resIndex,1)
            setCart(newCart);
        }

    }

    return (
        <CartContext.Provider value={{
            cart,
            addProduct,
            removeProduct
        }}>
            { children }
        </CartContext.Provider>
    );
}

