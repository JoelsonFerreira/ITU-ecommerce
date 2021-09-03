import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    addProduct: (product) => {},
    removeProduct: (product) => {},
    incrementProduct: (product,stock_qnt) => {},
    decrementProduct: (product) => {},
    getTotalPrice: () => {}
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

    const getTotalPrice = () => {
        //console.log("foi")
        return cart.reduce((x,v) => x + (v.price * v.quant),0).toFixed(2);
    }

    const incrementProduct = (product,stock_qnt) => {
        const resIndex = cart.findIndex(prod => prod.id == product.id);
        

        if(resIndex != -1 && cart[resIndex].quant < stock_qnt ) {
            const newCart = cart.slice();
            newCart[resIndex].quant++;
            setCart(newCart);
        }
        
    }

    const decrementProduct = (product) => {
        const resIndex = cart.findIndex(prod => prod.id == product.id);
        

        if(resIndex != -1) {
            const newCart = cart.slice();
            if(newCart[resIndex].quant > 1){
                newCart[resIndex].quant--;
                setCart(newCart);
            }

        }
        
    }

    return (
        <CartContext.Provider value={{
            cart,
            addProduct,
            removeProduct,
            incrementProduct,
            decrementProduct,
            getTotalPrice
        }}>
            { children }
        </CartContext.Provider>
    );
}

