import navstyles from "../styles/Navbar.module.css";
import styles from "../styles/Admin.module.css";

import { useContext } from 'react';
import { useForm } from "react-hook-form";

import InputMask from "react-input-mask";
import Link from "next/link";

import { CartContext } from '../contexts/CartContext';

function PayPage(){

    const { register, handleSubmit } = useForm();

    const { getTotalPrice, cart } = useContext(CartContext);

    async function buy(data) {
        const response = await fetch("https://itu-server.herokuapp.com/products/", { 
            method:"POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                productCart: cart,
                userData: data
            })
        });

        const res = await response.json();

        if(res.message === "compra realizada") {
            alert("A compra foi realizada!\n Verifique seu email para prosseguir.");
        } else if(res.message === "produtos sem estoque") {
            console.log(res);

            const message = cart.reduce((prev, cur) => {
                const prod = res.products.find(prod => prod._id == cur.id)
                if(prod)
                    return prev + `\t- Só temos ${prod.quant} produto(s) ${prod.title}\n`
                return prev;
            }, "Os seguintes produtos não têm quantidade o suficiente no estoque:\n");
            
            alert(message);
        }
    }

    return (
        <>
            <nav className={navstyles.navbar}>
                <div className={navstyles.nav_left}>
                    <h1 className ={navstyles.nav_left_title}>ITU</h1>
                </div>
            </nav>
            <main className={styles.container}>
                <form className={styles.adminform} onSubmit={handleSubmit(buy)}>  
                    <input type="text" placeholder="Nome..."  {...register("name")} />
                    <input type="text" placeholder="Email..." {...register("email")}/>
                    <input type="date" {...register("birthDate")}/>
                    <InputMask 
                        placeholder="Numero do telefone com DDD" 
                        mask="(99) 99999-9999"
                        {...register("phone")}
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