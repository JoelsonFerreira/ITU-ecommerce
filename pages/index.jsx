import styles       from '../styles/Home.module.css'

import NavBar       from '../components/navbar';
import ProductCard  from '../components/productCard';
import { useState } from 'react';

export default function Home({ products }) {
  const [curProducts, setCurProducts] = useState(products);
  
  function setProducts(text) {
    setCurProducts(
      products.filter(prod => {
        return prod.title.toUpperCase().includes(text.toUpperCase());
      })
    );
    console.log(curProducts);
  }

  return (
    <div className={styles.container}>
      <NavBar onSearch={setProducts} />

      {
        curProducts.length > 0 ?
        <main>
          {
            curProducts.map((product, index) => (
              <ProductCard 
                key={index} 
                product={product}
              />
            ))
          }
        </main>
        : 
        <h1 style={{
          color: "white", 
          textAlign: "center",
          marginTop: "3rem"
        }}>
          Nenhum produto não encontrado
        </h1>
      }
    </div>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch("https://itu-server.herokuapp.com/products/");
  const products = await response.json();

  return {
    props: {
      products
    }
  }
}