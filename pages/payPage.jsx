import navstyles from "../styles/Navbar.module.css";
import styles from "../styles/Admin.module.css";

import { useState } from 'react';
import { useContext } from 'react';

import InputMask from "react-input-mask";
import Link from "next/link";


import { CartContext } from '../contexts/CartContext';

function PayPage({ sum_price = 0.0 }){
    const [ phone, setPhone ] = useState("");
    const { getTotalPrice } = useContext(CartContext);

    return (
        <>
            <nav className={navstyles.navbar}>
                <div className={navstyles.nav_left}>
                    <h1 className ={navstyles.nav_left_title}>ITU</h1>
                </div>
            </nav>
            <main className={styles.container}>
                <form className={styles.adminform}> 
                    <input type="text" placeholder="Nome..."/>
                    <input type="text" placeholder="Email..."/>
                    <input type="date"/>
                    <InputMask 
                        placeholder="Numero do telefone com DDD" 
                        mask="(99) 99999-9999" 
                        value={phone} 
                        onChange={e => setPhone(e.target.value)} 
                    />

                    <p className={styles.sumPrice} >Total: R$ {getTotalPrice()} </p>
                    
                    <div className={styles.buttonsContainer}>
                        <Link href = "cartPage">
                            <button className={styles.secondary_button}>Voltar</button>
                        </Link>
                        <button className={styles.primary_button}>Adicionar</button>
                    </div>
                </form>
                <p className={styles.warning}>***As chaves do jogos serão enviadas, junto com as informações de como baixar,<br></br> para seu e-mail, após a confirmação do pagamento.</p>
            </main>
        </>
    )
}

export default PayPage;