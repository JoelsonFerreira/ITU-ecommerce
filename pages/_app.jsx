import { CartProvider } from '../contexts/CartContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
