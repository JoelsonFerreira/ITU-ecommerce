import styles from '../styles/Home.module.css'

import NavBar from '../components/navbar';
import productCard from '../components/productCard';

export default function Home() {
  const products = [
    {
      title: "The witcher 3",
      price: 299.99,
      quant: 654,
      image_url: "https://image.api.playstation.com/vulcan/img/rnd/202009/2913/TQKAd8U6hnIFQIIcz6qnFh8C.png"
    },
    {
      title: "Far cry 6",
      price: 399.99,
      quant: 355,
      image_url: "https://sm.ign.com/ign_br/cover/f/far-cry-6/far-cry-6_3gqr.jpg"
    }
  ];

  return (
    <div className={styles.container}>
      <NavBar />

      <main>
        {/* {
          products.map((product, index) => (
            <productCard 
              key={index} 
              title={product.title} 
              price={product.price} 
              image_url={product.image_url} 
            />
          ))
        } */}
      </main>
    </div>
  )
}
