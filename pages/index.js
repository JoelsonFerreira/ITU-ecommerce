import styles       from '../styles/Home.module.css'

import NavBar       from '../components/navbar';
import ProductCard  from '../components/productCard';

export default function Home({ products }) {
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

export async function getServerSideProps(context) {
  const response = await fetch("https://itu-server.herokuapp.com/product/")
  const products = await response.json();

  return {
    props: {
      products
    }, // will be passed to the page component as props
  }
}