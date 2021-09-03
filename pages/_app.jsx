import { AdminProvider } from '../contexts/AdminContext';
import { CartProvider } from '../contexts/CartContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <AdminProvider>
        <Component {...pageProps} />
      </AdminProvider>
    </CartProvider>
  );
}

export default MyApp;
