import styles       from '../styles/Home.module.css'

import NavBar       from '../components/navbar';
import ProductCard  from '../components/productCard';

import products     from "../data/products";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />

      <main>
        {
          products.map((product, index) => (
            <ProductCard 
              key={index} 
              title={product.title} 
              price={product.price} 
              image_url={product.image_url} 
            />
          ))
        }
      </main>
    </div>
  )
}
